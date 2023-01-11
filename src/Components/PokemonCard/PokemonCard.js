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
import pokeball from "../Assets/pokeball.png";
import { PokemonTypes } from "../../Components/PokemonTypes/PokemonTypes";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetail } from "../../Router/Coordinator";

export function PokemonCard() {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    let endpoints = [];
    for (let i = 1; i < 20; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        console.log(res);
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
      {pokemon.map((poke, index) => {
        return (
          <CardContainer key={index}>
            <CardLeftContainer>
              <CardDescription>
                <h4>{poke.data.id}</h4>
                <h2>{poke.data.name}</h2>
                <div>{PokemonTypes(poke.data.types[0].type.name)}</div>
                <div>{PokemonTypes(poke.data.types[1]?.type.name)}</div>
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
              <CardWaterMarkPokeball>
                <img src={pokeball} />
              </CardWaterMarkPokeball>
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
      })}
    </>
  );
}

export default PokemonCard;
