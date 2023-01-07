import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { goToPokemonList } from "../../Router/Coordinator";
import {
  PokemonDetailContainer,
  PokemonDetailDescriptionContainer,
  PokemonDetailImage,
  PokemonDetailLeftContainer,
  PokemonDetailMovesContainer,
  PokemonDetailRightContainer,
  PokemonDetailTitle,
} from "./pokemondetailstyle";

function PokemonDetailPage() {
  const navigate = useNavigate();
  const addPokemonOnPokedex = <button>Adicionar/Remover da pokedex</button>;
  const returnToMainPage = (
    <button onClick={() => goToPokemonList(navigate)}>Voltar</button>
  );
  return (
    <>
      <Header
        addPokemonOnPokedex={addPokemonOnPokedex}
        returnToMainPage={returnToMainPage}
      />
      <PokemonDetailContainer>
        <PokemonDetailTitle>
          <h1>Detalhes</h1>
        </PokemonDetailTitle>
        <PokemonDetailDescriptionContainer>
          <PokemonDetailLeftContainer>
            <PokemonDetailImage></PokemonDetailImage>
            <PokemonDetailImage></PokemonDetailImage>
            <PokemonDetailDescriptionContainer></PokemonDetailDescriptionContainer>
          </PokemonDetailLeftContainer>
          <PokemonDetailRightContainer>
            <PokemonDetailPokemonDescription></PokemonDetailPokemonDescription>
            <PokemonDetailMovesContainer></PokemonDetailMovesContainer>
          </PokemonDetailRightContainer>
        </PokemonDetailDescriptionContainer>
      </PokemonDetailContainer>
    </>
  );
}

export default PokemonDetailPage;
