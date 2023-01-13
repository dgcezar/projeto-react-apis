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
  const navigate = useNavigate();

  const location = useLocation();

  const [pokemon, setPokemon] = useState({})

  const { pokemonUrl, addToPokedex, removeFromPokedexList } = props;

  useEffect(() => {
    fetchPokemon();
  }, [])

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl)
      setPokemon(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <CardContainer        
        // style={{
        //   backgroundColor: BackgroundColorCard(pokemon.types[0].type.name),
        // }}
      >
        <CardLeftContainer>
          <CardDescription>
            <h4>#0{pokemon.id}</h4>
            {/* <h2>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2> */}
            {/* <article>
              <div>{PokemonTypes(pokemon.types[0].type.name)}</div>
              <div>{PokemonTypes(pokemon.types[1]?.type.name)}</div>
            </article> */}
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
              <button onClick={() => removeFromPokedexList(pokemon)}>Remover da Pokedex</button>
            )}
          </CardButton>
        </CardRightContainer>
      </CardContainer>      
    </>
  );
}
