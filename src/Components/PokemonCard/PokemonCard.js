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
import { useEffect, useState } from "react";
import axios from "axios";

export function PokemonCard(props) {
  const { pokemonUrl, addToPokedex, removeFromPokedexList } = props;

  const location = useLocation();
  
  const navigate = useNavigate();  

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchPokemon()    
  
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro na busca da lista de pokemons")
      console.log(error);
    }
  };
  
  const bgColor = pokemon.types?.map((typ) => (BackgroundColorCard(typ?.type.name)))
  const firstTypeColor = bgColor?.find((opa)=>opa)

  console.log(firstTypeColor)

  return (
    <>
      <CardContainer
      style={{
        backgroundColor: `${firstTypeColor}`
      }}
      >
        <CardLeftContainer>
          <CardDescription>
            <h4>#0{pokemon.id}</h4>
            <h2>{pokemon.name}</h2>
            <article>
              {pokemon.types?.map((typ) => (
                <div>
                  <div>{PokemonTypes(typ?.type.name)}</div>
                </div>
              ))}
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
              src={`https://www.grindosaur.com/img/games/pokemon/pokedex/${pokemon.id}-${pokemon.name}.png`}
              alt={`${pokemon.name}`}
            />
          </CardImage>
          <CardButton>
            {location.pathname === "/" ? (
              <button onClick={() => addToPokedex(pokemon)}>Capturar</button>
            ) : (
              <button onClick={() => removeFromPokedexList(pokemon)}>
                Remover da Pokedex
              </button>
            )}
          </CardButton>
        </CardRightContainer>
      </CardContainer>
    </>
  );
}
