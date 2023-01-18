import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonTypes } from "../PokemonTypes/PokemonTypes";
import {
  BaseStatsContainer,
  PokemonDetailBaseStatsContainer,
  PokemonDetailDescriptionContainer,
  PokemonDetailImage,
  PokemonDetailLeftContainer,
  PokemonDetailMovesContainer,
  PokemonDetailPokeImg,
  PokemonDetailPokemonDescription,
  PokemonDetailRightContainer,
} from "./pokemondetailcardstyle";

function PokemonDetailCard(props) {
  const [pokemonDetail, setPokemonDetail] = useState({});

  const { pokemonUrl } = props;

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemonDetail(response.data);
    } catch (error) {
      console.log("Erro na busca da lista de pokemons");
      console.log(error);
    }
  };

  return (
    <>
      <PokemonDetailDescriptionContainer>
        <PokemonDetailLeftContainer>
          <PokemonDetailImage>
            <img src={pokemonDetail.sprites?.front_default} />
            <img src={pokemonDetail.sprites?.back_default} />
          </PokemonDetailImage>
          <PokemonDetailBaseStatsContainer>
            <h3>Base stats</h3>
          </PokemonDetailBaseStatsContainer>
        </PokemonDetailLeftContainer>
        <PokemonDetailRightContainer>
          <PokemonDetailPokemonDescription>
            <div>
              <h4>#0{pokemonDetail.id}</h4>
              <h2>{pokemonDetail.name}</h2>
              <article>
                {pokemonDetail.types?.map((typ) => (
                  <div>
                    <div>{PokemonTypes(typ?.type.name)}</div>
                  </div>
                ))}
              </article>
            </div>
            <PokemonDetailPokeImg>
            <img
              src={`https://www.grindosaur.com/img/games/pokemon/pokedex/${pokemonDetail.id}-${pokemonDetail.name}.png`}
              alt={`${pokemonDetail.name}`}
            />
            </PokemonDetailPokeImg>
          </PokemonDetailPokemonDescription>
          <PokemonDetailMovesContainer>
            <h3>Moves:</h3>
            {pokemonDetail.moves?.map(
              (mov, index) => index < 4 && <div>{mov?.move.name}</div>
            )}
          </PokemonDetailMovesContainer>
        </PokemonDetailRightContainer>
      </PokemonDetailDescriptionContainer>
    </>
  );
}

export default PokemonDetailCard;
