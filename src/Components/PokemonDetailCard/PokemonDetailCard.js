// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BaseStatsNames } from "../BaseStatsNames/BaseStatsNames";
// import { BackgroundColorCard } from "../PokemonCard/pokemoncardstyle";
// import { PokemonTypes } from "../PokemonTypes/PokemonTypes";
// import {
//   BaseStatsContainer,
//   PokemonDetailBaseStatsContainer,
//   PokemonDetailDescriptionContainer,
//   PokemonDetailImage,
//   PokemonDetailLeftContainer,
//   PokemonDetailMovesContainer,
//   PokemonDetailPokeImg,
//   PokemonDetailPokemonDescription,
//   PokemonDetailRightContainer,
//   ProgressBar,
//   ProgressBarContainer,
// } from "./pokemondetailcardstyle";

// function PokemonDetailCard(props) {
//   const [pokemonDetail, setPokemonDetail] = useState({});

//   const { pokemonUrl } = props;

//   useEffect(() => {
//     getDetails();
//   }, []);

//   const getDetails = async () => {
//     try {
//       const response = await axios.get(pokemonUrl);
//       setPokemonDetail(response.data);
//     } catch (error) {
//       console.log("Erro na busca da lista de pokemons");
//       console.log(error);
//     }
//   };

//   const bgColor = pokemonDetail.types?.map((typ) =>
//     BackgroundColorCard(typ?.type.name)
//   );
//   const firstTypeColor = bgColor?.find((typeColor) => typeColor);

//   return (
//     <>
//       <PokemonDetailDescriptionContainer
//         style={{
//           backgroundColor: `${firstTypeColor}`,
//         }}
//       >
//         <PokemonDetailLeftContainer>
//           <PokemonDetailImage>
//             <img src={pokemonDetail.sprites?.front_default} />
//             <img src={pokemonDetail.sprites?.back_default} />
//           </PokemonDetailImage>
//           <PokemonDetailBaseStatsContainer>
//             <h3>Base stats</h3>
//             {pokemonDetail.stats?.map((pokeStats) => (
//               <BaseStatsContainer>
//                 <span>{BaseStatsNames(pokeStats?.stat.name)}</span>
//                 <span>{pokeStats?.base_stat}</span>
//                 <ProgressBarContainer>
//                   <ProgressBar style={{ width: `${pokeStats?.base_stat}%` }} />
//                 </ProgressBarContainer>
//               </BaseStatsContainer>
//             ))}
//             <div>
//               <span>Total</span>
//             </div>
//           </PokemonDetailBaseStatsContainer>
//         </PokemonDetailLeftContainer>
//         <PokemonDetailRightContainer>
//           <PokemonDetailPokemonDescription>
//             <div>
//               <h4>#0{pokemonDetail.id}</h4>
//               <h2>
//                 {pokemonDetail.name?.charAt(0).toUpperCase() +
//                   pokemonDetail.name?.slice(1)}
//               </h2>
//               <article>
//                 {pokemonDetail.types?.map((typ) => (
//                   <div>
//                     <div>{PokemonTypes(typ?.type.name)}</div>
//                   </div>
//                 ))}
//               </article>
//             </div>
//             <PokemonDetailPokeImg>
//               <img
//                 src={`https://www.grindosaur.com/img/games/pokemon/pokedex/${pokemonDetail.id}-${pokemonDetail.name}.png`}
//                 alt={`${pokemonDetail.name}`}
//               />
//             </PokemonDetailPokeImg>
//           </PokemonDetailPokemonDescription>
//           <PokemonDetailMovesContainer>
//             <h3>Moves:</h3>
//             {pokemonDetail.moves?.map(
//               (mov, index) =>
//                 index < 4 && (
//                   <div>
//                     {mov?.move.name.charAt(0).toUpperCase() +
//                       mov?.move.name?.slice(1)}
//                   </div>
//                 )
//             )}
//           </PokemonDetailMovesContainer>
//         </PokemonDetailRightContainer>
//       </PokemonDetailDescriptionContainer>
//     </>
//   );
// }

// export default PokemonDetailCard;
