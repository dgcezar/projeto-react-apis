export const BaseStatsNames = (name) => {
  switch (name) {
    case "hp":
      return <span>HP</span>;
    case "attack":
      return <span>Attack</span>;
    case "defense":
      return <span>Defense</span>;
    case "special-attack":
      return <span>Sp. Atk</span>;
    case "special-defense":
      return <span>Sp. Def</span>;
    case "speed":
      return <span>Speed</span>;
    default:
  }
};
