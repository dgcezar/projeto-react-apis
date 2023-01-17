import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { BASE_URL } from "../../Components/Url/Url";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { goToPokemonList } from "../../Router/Coordinator";
import {
  PokedexGrid,
  PokedexGridTitle,
  PokedexMainContainer,
  ReturnToMainPageButton,
} from "./pokedexpagestyle";

function PokedexPage() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);

  const { pokedexList, removeFromPokedexList } = context;

  const returnToMainPage = (
    <ReturnToMainPageButton onClick={() => goToPokemonList(navigate)}>
      &lt; Todos Pokemons
    </ReturnToMainPageButton>
  );

  return (
    <>
      <Header returnToMainPage={returnToMainPage} />
      <PokedexMainContainer>
        <PokedexGridTitle>
          <h1>Meus Pokémons</h1>
        </PokedexGridTitle>
        <PokedexGrid>
          {pokedexList.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemonUrl={`${BASE_URL}/${pokemon.name}`}
              removeFromPokedexList={removeFromPokedexList}
            />
          ))}
        </PokedexGrid>
      </PokedexMainContainer>
    </>
  );
}

export default PokedexPage;
