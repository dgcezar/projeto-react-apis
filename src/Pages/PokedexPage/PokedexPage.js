import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { goToPokemonList } from "../../Router/Coordinator";
import { PokedexGrid, PokedexGridTitle, PokedexMainContainer, ReturnToMainPageButton } from "./pokedexpagestyle";

function PokedexPage() {
  const navigate = useNavigate();

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
          <PokemonCard />
        </PokedexGrid>
      </PokedexMainContainer>

    </>
  );
}

export default PokedexPage;
