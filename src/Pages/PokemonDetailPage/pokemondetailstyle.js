import styled from "styled-components";

export const AddOrRemoveButton = styled.button`
  width: 226px;
  height: 57px;
  background-color: #FF6262;
  border-radius: 8px;
  border-width: 0;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  margin-top: 25px;
  margin-right: 20px;
  cursor: pointer;

`

export const PokemonDetailContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #5e5e5e;  
`;

export const PokemonDetailTitle = styled.div`
  display: flex;
  align-items: center;
  width: 1380px;
  height: 200px;
  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
  }
`;