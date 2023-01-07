import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { goToPokemonList } from "../../Router/Coordinator";
import { PokedexGrid, PokedexGridTitle, PokedexMainContainer } from "./pokedexpagestyle";

function PokedexPage() {
  const navigate = useNavigate();

  const returnToMainPage = (
    <button onClick={() => goToPokemonList(navigate)}>
      &lt; Todos Pokemons
    </button>
  );
  return (
    <>
      <Header returnToMainPage={returnToMainPage} />
      <PokedexMainContainer>
        <PokedexGridTitle>
          <h1>Meus Pokémons</h1>
        </PokedexGridTitle>
        <PokedexGrid>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </PokedexGrid>
      </PokedexMainContainer>

    </>
  );
}

export default PokedexPage;
