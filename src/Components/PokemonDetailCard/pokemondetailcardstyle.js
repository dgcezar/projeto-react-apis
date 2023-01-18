import styled from "styled-components";
import pokeball2 from "../Assets/pokeball.png";

export const PokemonDetailDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1389px;
  height: 663px;
  border-radius: 38px;
  background-color: #729f92;
`;

export const PokemonDetailLeftContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 50%;
  height: 100%;
  padding: 20px 40px;
`;

export const PokemonDetailRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 20px 40px;
  background-image: url(${pokeball2});
`;

export const PokemonDetailImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 282px;
  gap: 40px;
  img {
    border-radius: 8px;
    background-color: #fff;
    width: 282px;
    height: 282px;
  }
`;

export const PokemonDetailBaseStatsContainer = styled.div`
  width: 343px;
  height: 613px;
  border-radius: 12px;
  background-color: #fff;
  padding: 20px;
  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 800;
    font-size: 24px;
    color: #000;
  }
`;

export const PokemonDetailPokemonDescription = styled.div`
  display: flex;
  width: 620px;
  height: 30%;
  justify-content: space-between;
  h4 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    margin: 0;
    line-height: 19px;
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: #fff;
    margin: 0;
    padding-bottom: 12px;
  }

  article {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const PokemonDetailPokeImg = styled.div`
  img {
    object-fit: cover;
    width: 270px;
    margin-top: -150px;
  }
`;

export const PokemonDetailMovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 292px;
  height: 453px;
  border-radius: 8px;
  background-color: #fff;
  padding: 20px;
  gap: 20px;

  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 800;
    font-size: 24px;
    color: #000;
  }
`;
