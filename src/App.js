import { createGlobalStyle } from "styled-components";
import Router from "./Router/Router";
import { GlobalContext } from "./Contexts/GlobalContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./Components/Url/Url";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800&family=Montserrat&family=Poppins:wght@400;700&display=swap');
  }
`;

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokedexList, setPokedexList] = useState([]);

  useEffect(() => {
    fetchPokeList();
  }, []);

  const fetchPokeList = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokeList(response.data.results);
    } catch (error) {
      console.log("Erro na busca da lista de pokemons")
      console.log(error.response)
    }
  }  

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadytOnPokedex = pokedexList.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadytOnPokedex) {
      const newPokedexList = [...pokedexList, pokemonToAdd];
      setPokedexList(newPokedexList);
    }
  };

  const removeFromPokedexList = (pokemonToRemove) => {
    const newPokedexList = pokedexList.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedexList(newPokedexList);
  };

  const context = {
    pokeList: pokeList,
    addToPokedex: addToPokedex,
    pokedexList: pokedexList,
    removeFromPokedexList: removeFromPokedexList,
  };

  return (
    <div>
      <GlobalStyled />
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
