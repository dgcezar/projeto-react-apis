import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { goToPokemonList } from "../../Router/Coordinator";

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
    </>
  );
}

export default PokedexPage;
