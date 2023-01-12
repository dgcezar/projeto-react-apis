import styled from "styled-components";

export const PokedexPageButtonStyle = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Poppins:wght@400;700&display=swap");
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
  margin-left: auto;
`;

export const PokemonListContainer = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Poppins:wght@400;700&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 2200px;
  background-color: #5e5e5e; ;
`;

export const PokemonGridTitle = styled.div`
  display: flex;
  align-items: center;
  width: 1440px;
  height: 200px;
  h1 {
    padding-left: 40px;
    font-family: "Poppins", sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
  }
`;

export const PokemonGrid = styled.div`
  display: grid;
  width: 1440px;
  padding-left: 40px;
  padding-right: 40px;
  grid-template-columns: 34% 34% 34%;
  grid-auto-rows: minmax(18%, auto);
`;
