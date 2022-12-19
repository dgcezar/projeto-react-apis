import Header from "../../Components/Header/Header";
import { PokedexPageButtonStyle } from "./pokemonliststyle";

export function PokemonListPage(props) {
  const PokedexPageButton = (
    <PokedexPageButtonStyle onClick={()=>props.changePage(2)}>Pokédex</PokedexPageButtonStyle>
  );
  return (
    <>
      <Header pokedexbutton={PokedexPageButton}/>
    </>
  );
}

export default PokemonListPage;
