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
  CardWaterMarkPokeball,
} from "./pokemoncardstyle";
import pokeball from "../Assets/pokeball.png"
import { PokemonTypes } from "../PokemonTypes/PokemonTypes";

export function PokemonCard() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    let endpoints = [];
    for (let i = 1; i < 20; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        setPokemon(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      {pokemon.map((poke) => {
        return (
          <CardContainer>
            <CardLeftContainer>
              <CardDescription>
                <h4>{poke.data.id}</h4>
                <h2>{poke.data.name}</h2>
                <span>{poke.data.types[0].type.name}</span>
                <span>{poke.data.types[1]?.type.name}</span>                
              </CardDescription>
              <CardDetail>
                <a>Detalhes</a>
              </CardDetail>
            </CardLeftContainer>
            <CardRightContainer>
              {/* <CardWaterMarkPokeball>
                <img src={pokeball} />
              </CardWaterMarkPokeball> */}
              <CardImage>
                <img src={poke.data.sprites.front_default} />
              </CardImage>
              <CardButton>
                <button>Capturar!</button>
              </CardButton>
            </CardRightContainer>
          </CardContainer>
        );
      })}
    </>
  );
}

export default PokemonCard;
