import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { goToPokedexPage } from "../../Router/Coordinator";
import {
  PokedexPageButtonStyle,
  PokemonGrid,
  PokemonGridTitle,
  PokemonListContainer,
} from "./pokemonliststyle";

function PokemonListPage() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);

  const { pokeList, addToPokedex, pokedexList, } = context;

  // const filteredPokeList = () =>
  //   pokeList.filter(
  //     (pokemonInList) =>
  //       !pokedexList.find(
  //         (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
  //       )
  //   );

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
          {pokeList.map((poke) => (
            <PokemonCard
              key={poke.url}
              pokemonUrl={poke.url}          
              addToPokedex={addToPokedex}
            />
          ))}
        </PokemonGrid>
      </PokemonListContainer>
    </>
  );
}

export default PokemonListPage;
