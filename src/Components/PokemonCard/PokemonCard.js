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
} from "./pokemoncardstyle";

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
                <span>{poke.data.id}</span>
                <span>{poke.data.name}</span>
                <span>type1</span>
                <span>type2</span>
              </CardDescription>
              <CardDetail>
                <a>Detalhes</a>
              </CardDetail>
            </CardLeftContainer>
            <CardRightContainer>
              <CardImage>
                <img src="#" />
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
