import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import PokemonDetailCard from "../../Components/PokemonDetailCard/PokemonDetailCard";
import { BASE_URL } from "../../Components/Url/Url";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { goToPokemonList } from "../../Router/Coordinator";
import { ReturnToMainPageButton } from "../PokedexPage/pokedexpagestyle";
import {
  AddOrRemoveButton,
  PokemonDetailContainer,
  PokemonDetailTitle,
} from "./pokemondetailstyle";

function PokemonDetailPage() {
  const navigate = useNavigate();

  let {id} = useParams()

  const context = useContext(GlobalContext);

  const { addToPokedex, removeFromPokedexList, pokeList } = context;

  const addPokemonOnPokedex = (
    <AddOrRemoveButton>Adicionar/Remover da pokedex</AddOrRemoveButton>
  );

  const returnToMainPage = (
    <ReturnToMainPageButton onClick={() => goToPokemonList(navigate)}>
      &lt; Todos Pokemons
    </ReturnToMainPageButton>
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
        <div>
          <PokemonDetailCard
            key={pokeList.name}
            pokemonUrl={`${BASE_URL}/${id}`}            
          />
        </div>
      </PokemonDetailContainer>
    </>
  );
}

export default PokemonDetailPage;
