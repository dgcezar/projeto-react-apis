import styled from "styled-components";
import pokeball from "../Assets/pokeball.png";

const grassColor = `#729F92`;
const fireColor = `#EAAB7D`;
const waterColor = `#71C3FF`;
const bugColor = `#76A866`;
const normalColor = `#BF9762`;

export const BackgroundColorCard = (typeColor) => {
  switch (typeColor) {
    case "grass":
      return grassColor;
    case "fire":
      return fireColor;
    case "water":
      return waterColor;
    case "bug":
      return bugColor;
    case "normal":
      return normalColor;
    default:
  }
};

export const CardContainer = styled.div`
  display: flex;
  width: 440px;
  height: 210px;
  border-radius: 12px;
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Poppins:wght@400;700&display=swap");
`;

export const CardLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 210px;
`;

export const CardRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-image: url(${pokeball});
  background-position: -30px;
`;

export const CardDescription = styled.div`
  display: flex;
  height: 55%;
  align-items: flex-start;
  flex-direction: column;
  padding: 23px 0px 0px 18px;
  width: 100%;

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
    font-size: 32px;
    color: #fff;
    margin: 0;
    padding-bottom: 12px;
  }

  article {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  div {
    img {
      object-fit: cover;
      width: 96px;
      height: 31px;
    }
  }
`;

export const CardDetail = styled.div`
  display: flex;
  height: 100%;
  button {
    display: flex;
    align-items: flex-end;
    padding-bottom: 20px;
    padding-left: 18px;
    background: none;
    border: none;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CardImage = styled.div`
  display: flex;
  img {
    width: 193px;
    margin-top: -60px;
    margin-left: 20px;
  }
`;

export const CardButton = styled.div`
  display: flex;
  height: 100%;
  justify-content: end;
  button {
    background-color: #fff;
    width: 146px;
    height: 38px;
    border-radius: 8px;
    border-width: 0;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #0f0f0f;
    margin-top: 25px;
    margin-right: 20px;
    cursor: pointer;
  }
`;

export const CardWaterMarkPokeball = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
  width: 185px;
`;
