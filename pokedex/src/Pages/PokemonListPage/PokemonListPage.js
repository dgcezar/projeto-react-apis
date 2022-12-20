import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { goToPokedexPage } from "../../Router/Coordinator";
import { PokedexPageButtonStyle } from "./pokemonliststyle";

function PokemonListPage() {
  const navigate = useNavigate();
  const pokedexPageButton = (
    <PokedexPageButtonStyle onClick={() => goToPokedexPage(navigate)}>
      Pokédex
    </PokedexPageButtonStyle>
  );
  return (
    <>
      <Header pokedexbutton={pokedexPageButton} />
    </>
  );
}

export default PokemonListPage;
