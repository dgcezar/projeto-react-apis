import { CardContainer, CardDescription, CardLeftContainer, CardRightContainer, CardDetail, CardImage, CardButton } from "./pokemoncardstyle";

export function PokemonCard() {
  return (
    <>
      <CardContainer>
        <CardLeftContainer>
          <CardDescription>
            <span>#1</span>
            <span>Bulbasaur</span>
            <span>type1</span>
            <span>type2</span>
          </CardDescription>
          <CardDetail>
            <a>Detalhes</a>
          </CardDetail>
        </CardLeftContainer>
        <CardRightContainer>
          <CardImage><img src="#" /></CardImage>
          <CardButton><button>Capturar!</button></CardButton>
        </CardRightContainer>
      </CardContainer>
    </>
  );
}

export default PokemonCard;
