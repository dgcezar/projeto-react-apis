import styled from "styled-components";

export const ReturnToMainPageButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Poppins:wght@400;700&display=swap");
  border: none;
  background: none;
  text-decoration: underline;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-right: auto;
  cursor: pointer;
`;

export const PokedexMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #5e5e5e;
  align-items: center;
`;

export const PokedexGridTitle = styled.div`
  display: flex;
  align-items: center;
  width: 1440px;
  height: 200px;
  h1 {    
    font-family: "Poppins", sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
  }
`;

export const PokedexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  width: 1440px;
  height: 577px;
`;
