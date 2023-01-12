import bug from "../Assets/bug.svg";
import dark from "../Assets/dark.svg";
import dragon from "../Assets/dragon.svg";
import electric from "../Assets/electric.svg";
import fairy from "../Assets/fairy.svg";
import fighting from "../Assets/fighting.svg";
import fire from "../Assets/fire.svg";
import flying from "../Assets/flying.svg";
import ghost from "../Assets/ghost.svg";
import grass from "../Assets/grass.svg";
import ground from "../Assets/ground.svg";
import ice from "../Assets/ice.svg";
import normal from "../Assets/normal.svg";
import psychic from "../Assets/psychic.svg";
import rock from "../Assets/rock.svg";
import steel from "../Assets/steel.svg";
import water from "../Assets/water.svg";
import poison from "../Assets/poison.svg";

export const PokemonTypes = (type) => {
  switch (type) {
    case "bug":
      return <img src={bug} alt="bug type" />;
    case "dark":
      return <img src={dark} alt="dark type" />;
    case "dragon":
      return <img src={dragon} alt="dragon type" />;
    case "electric":
      return <img src={electric} alt="electric type" />;
    case "fairy":
      return <img src={fairy} alt="fairy type" />;
    case "flying":
      return <img src={flying} alt="flying type" />;
    case "fire":
      return <img src={fire} alt="fire type" />;
    case "fighting":
      return <img src={fighting} alt="fighting type" />;
    case "ghost":
      return <img src={ghost} alt="ghost type" />;
    case "grass":
      return <img src={grass} alt="grass type" />;
    case "ground":
      return <img src={ground} alt="ground type" />;
    case "ice":
      return <img src={ice} alt="ice type" />;
    case "normal":
      return <img src={normal} alt="normal type" />;
    case "psychic":
      return <img src={psychic} alt="psychic type" />;
    case "rock":
      return <img src={rock} alt="rock type" />;
    case "steel":
      return <img src={steel} alt="steel type" />;
    case "water":
      return <img src={water} alt="water type" />;
    case "poison":
      return <img src={poison} alt="poison type" />;
    default:      
  }
};