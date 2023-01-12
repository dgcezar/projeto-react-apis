import styled from "styled-components";

export const PokedexPageButtonStyle = styled.button`
  background-color: #33a4f5;
  font-size: 24px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  color: white;
  width: 287px;
  height: 74px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const PokemonListContainer = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Poppins:wght@400;700&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #5e5e5e; ;
`;

export const PokemonGridTitle = styled.div`
  width: 1440px;
  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
  }
`;

export const PokemonGrid = styled.div`
  display: grid;
  width: 1440px;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  grid-template-columns: 35% 35% 35%;
  grid-template-rows: 25% 25% 25%;
`;
