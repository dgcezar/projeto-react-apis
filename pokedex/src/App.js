import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "./Pages/PokemonListPage/PokemonListPage"
import { createGlobalStyle } from "styled-components";
import { useState } from "react";


export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {

  const [page, SetPage] = useState(1);

  const changePage = (page) => SetPage(page);

  if (page === 1) {
    return (
      <div>
        <PokemonListPage changePage={changePage}/>
        <GlobalStyled />
      </div>
    );
  }

  if (page === 2) {
    return (
      <div>
        <PokedexPage />
        <GlobalStyled />
      </div>
    )
  }

  if (page === 3) {
    return (
      <div>
        <PokemonDetailPage />
        <GlobalStyled />
      </div>
    )
  }


  
}

export default App;
