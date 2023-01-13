import { createGlobalStyle } from "styled-components";
import Router from "./Router/Router";
import { GlobalContext } from "./Contexts/GlobalContext";
import { useEffect, useState } from "react";
import axios from "axios";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokedexList, setPokedexList] = useState([]);

  useEffect(() => {
    getPokeList();
  }, []);

  const getPokeList = () => {
    let endpoints = [];
    for (let i = 1; i < 20; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        setPokeList(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const addToPokedex = (pokeAdd) => {
    const isAlreadtOnPokedex = pokedexList.find(
      (poke) => poke.data.name === pokeAdd.data.name
    );

    if (!isAlreadtOnPokedex) {
      const newPokedexList = [...pokedexList, pokeAdd];
      setPokeList(newPokedexList);
    }
  };

  const removeFromPokedexList = (pokeToRemove) => {
    const newPokedexList = pokedexList.filter(
      (poke) => poke.data.name !== pokeToRemove.data.name
    );

    setPokedexList(newPokedexList);
  };

  const context = {
    pokeList: pokeList,
    addToPokedex: addToPokedex,
    pokeList: pokeList,
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
