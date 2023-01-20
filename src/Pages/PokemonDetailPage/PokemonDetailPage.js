import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import {
  AddToPokedexButton,
  BackgroundColorCard,
  RemoveFromPokedexButton,
} from "../../Components/PokemonCard/pokemoncardstyle";
import { BaseStatsNames } from "../../Components/BaseStatsNames/BaseStatsNames";
import { BASE_URL } from "../../Components/Url/Url";
import { GlobalContext } from "../../Contexts/GlobalContext";
import { goToPokemonList } from "../../Router/Coordinator";
import { ReturnToMainPageButton } from "../PokedexPage/pokedexpagestyle";
import {
  AddOrRemoveButton,
  BaseStatName,
  BaseStatNumber,
  BaseStatsBox,
  BaseStatsContainer,
  BaseStatTotal,
  PokemonDetailBaseStatsContainer,
  PokemonDetailContainer,
  PokemonDetailDescriptionContainer,
  PokemonDetailImage,
  PokemonDetailLeftContainer,
  PokemonDetailMovesContainer,
  PokemonDetailPokeImg,
  PokemonDetailPokemonDescription,
  PokemonDetailRightContainer,
  PokemonDetailTitle,
  ProgressBar,
  ProgressBarContainer,
} from "./pokemondetailstyle";
import { PokemonTypes } from "../../Components/PokemonTypes/PokemonTypes";

function PokemonDetailPage() {
  const navigate = useNavigate();

  let { id } = useParams();

  const context = useContext(GlobalContext);

  const { addToPokedex, removeFromPokedexList, pokedexList } = context;

  const returnToMainPage = (
    <ReturnToMainPageButton onClick={() => goToPokemonList(navigate)}>
      &lt; Todos Pokemons
    </ReturnToMainPageButton>
  );

  //

  const [pokemonDetail, setPokemonDetail] = useState({});

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      setPokemonDetail(response.data);
    } catch (error) {
      console.log("Erro na busca da lista de pokemons");
      console.log(error);
    }
  };

  const bgColor = pokemonDetail.types?.map((typ) =>
    BackgroundColorCard(typ?.type.name)
  );
  const firstTypeColor = bgColor?.find((typeColor) => typeColor);

  const removeButton = (
    <AddOrRemoveButton
      style={{ backgroundColor: "#FF6262" }}
      onClick={() => removeFromPokedexList(pokemonDetail)}
    >
      Excluir da Pokédex
    </AddOrRemoveButton>
  );

  const addButton = (
    <AddOrRemoveButton
      style={{ backgroundColor: "#70B873" }}
      onClick={() => addToPokedex(pokemonDetail)}
    >
      Adicionar na Pokédex
    </AddOrRemoveButton>
  );

  return (
    <>
      <Header
        returnToMainPage={returnToMainPage}
        AddOrRemoveButton={
          pokedexList.find((pk) => pk.id == id) ? (
            <div>{removeButton}</div>
          ) : (
            <div>{addButton}</div>
          )
        }
      />
      <PokemonDetailContainer>
        <PokemonDetailTitle>
          <h1>Detalhes</h1>
        </PokemonDetailTitle>
        <div>
          <>
            <PokemonDetailDescriptionContainer
              style={{
                backgroundColor: `${firstTypeColor}`,
              }}
            >
              <PokemonDetailLeftContainer>
                <PokemonDetailImage>
                  <img src={pokemonDetail.sprites?.front_default} />
                  <img src={pokemonDetail.sprites?.back_default} />
                </PokemonDetailImage>
                <PokemonDetailBaseStatsContainer>
                  <h3>Base stats</h3>
                  {pokemonDetail.stats?.map((pokeStats) => (
                    <BaseStatsBox>
                      <BaseStatName>
                        <span>{BaseStatsNames(pokeStats?.stat.name)}</span>
                      </BaseStatName>
                      <BaseStatNumber>
                        <span>{pokeStats?.base_stat}</span>
                      </BaseStatNumber>
                      <ProgressBarContainer>
                        <ProgressBar
                          style={{ width: `${pokeStats?.base_stat}%`}}
                        />
                      </ProgressBarContainer>
                    </BaseStatsBox>
                  ))}
                  <BaseStatTotal>
                    <span>Total</span>
                    <div>
                      <p>
                        {pokemonDetail?.stats?.reduce(
                          (a, v) => (a = a + v.base_stat),
                          0
                        )}
                      </p>
                    </div>
                  </BaseStatTotal>
                </PokemonDetailBaseStatsContainer>
              </PokemonDetailLeftContainer>
              <PokemonDetailRightContainer>
                <PokemonDetailPokemonDescription>
                  <div>
                    <h4>#0{pokemonDetail.id}</h4>
                    <h2>
                      {pokemonDetail.name?.charAt(0).toUpperCase() +
                        pokemonDetail.name?.slice(1)}
                    </h2>
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
                    (mov, index) =>
                      index < 4 && (
                        <div>
                          {mov?.move.name.charAt(0).toUpperCase() +
                            mov?.move.name?.slice(1)}
                        </div>
                      )
                  )}
                </PokemonDetailMovesContainer>
              </PokemonDetailRightContainer>
            </PokemonDetailDescriptionContainer>
          </>
        </div>
      </PokemonDetailContainer>
    </>
  );
}

export default PokemonDetailPage;
