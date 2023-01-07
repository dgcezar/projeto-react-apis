import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { goToPokedexPage } from "../../Router/Coordinator";
import {
  PokedexPageButtonStyle,
  PokemonGrid,
  PokemonGridTitle,
  PokemonListContainer,
} from "./pokemonliststyle";

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
      <PokemonListContainer>
        <PokemonGridTitle>
          <h1>Todos Pokémons</h1>
        </PokemonGridTitle>
        <PokemonGrid>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </PokemonGrid>
      </PokemonListContainer>
    </>
  );
}

export default PokemonListPage;
