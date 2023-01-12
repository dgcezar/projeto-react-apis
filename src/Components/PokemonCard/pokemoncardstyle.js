import styled from "styled-components";

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
  height: 210px;
`;

export const CardDescription = styled.div`
  display: flex;
`;

export const CardDetail = styled.div`
  display: flex;
`;

export const CardImage = styled.div`
  display: flex;
  img {
    width: 193px;
    object-position: right top;
  }
`;

export const CardButton = styled.div`
  display: flex;
`;

export const CardWaterMarkPokeball = styled.div`
  display: flex;
  img {
    width: 210.73px;
  }
`;
