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
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../Router/Coordinator";

export function PokemonCard() {
  const navigate = useNavigate();

  return (
    <>
      {/* {pokemon.map((poke) => {
        return (
          <CardContainer
            key={poke.data.id}
            style={{
              backgroundColor: BackgroundColorCard(
                poke.data.types[0].type.name
              ),
            }}
          >
            <CardLeftContainer>
              <CardDescription>
                <h4>#0{poke.data.id}</h4>
                <h2>
                  {poke.data.name.charAt(0).toUpperCase() +
                    poke.data.name.slice(1)}
                </h2>
                <article>
                  <div>{PokemonTypes(poke.data.types[0].type.name)}</div>
                  <div>{PokemonTypes(poke.data.types[1]?.type.name)}</div>
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
                  src={`https://www.grindosaur.com/img/games/pokemon/pokedex/${poke.data.id}-${poke.data.name}.png`}
                  alt={`${poke.data.name}`}
                />
              </CardImage>
              <CardButton>
                <button>Capturar!</button>
              </CardButton>
            </CardRightContainer>
          </CardContainer>
        );
      })} */}
    </>
  );
}