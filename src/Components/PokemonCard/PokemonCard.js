import axios from "axios";
import { useEffect, useState } from "react";
import {
  CardContainer,
  CardDescription,
  CardLeftContainer,
  CardRightContainer,
  CardDetail,
  CardImage,
  CardButton,
  BackgroundColorCard,
} from "./pokemoncardstyle";
import { PokemonTypes } from "../../Components/PokemonTypes/PokemonTypes";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../Router/Coordinator";

export function PokemonCard(props) {
  const navigate = useNavigate();

  const location = useLocation();

  const { addToPokedex, removeFromPokedex } = props;

  return (
    <>
      <CardContainer
        key={props.key}
        style={{
          backgroundColor: BackgroundColorCard(props.type[0].type.name),
        }}
      >
        <CardLeftContainer>
          <CardDescription>
            <h4>#0{props.id}</h4>
            <h2>
              {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </h2>
            <article>
              <div>{PokemonTypes(props.type[0].type.name)}</div>
              <div>{PokemonTypes(props.type[1]?.type.name)}</div>
            </article>
          </CardDescription>
          <CardDetail>
            <button
              onClick={() => {
                goToPokemonDetail(navigate);
              }}
            >
              Detalhes
            </button>
          </CardDetail>
        </CardLeftContainer>
        <CardRightContainer>
          <CardImage>
            <img
              src={`https://www.grindosaur.com/img/games/pokemon/pokedex/${props.id}-${props.name}.png`}
              alt={`${props.name}`}
            />
          </CardImage>
          <CardButton>
            {location.pathname === "/" ? (
              <button onClick={() => {addToPokedex()}}>Capturar</button>
            ) : (
              <button onClick={() => {removeFromPokedex()}}>Remover da Pokedex</button>
            )}
          </CardButton>
        </CardRightContainer>
      </CardContainer>      
    </>
  );
}
