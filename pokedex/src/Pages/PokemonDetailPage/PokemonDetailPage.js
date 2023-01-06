import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { goToPokemonList } from "../../Router/Coordinator";

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
    </>
  );
}

export default PokemonDetailPage;
