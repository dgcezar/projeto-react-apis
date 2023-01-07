import styled from "styled-components";

export const PokedexMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #5E5E5E;
  align-items: center;
`;

export const PokedexGridTitle = styled.div`
  width: 1440px;
`;

export const PokedexGrid = styled.div`
  display: grid;
  grid-template-columns: 35% 35% 35%;
  grid-template-rows: 25% 25%;
  width: 1440px;
  height: 100%;
`;
