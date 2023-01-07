import { HeaderContainer } from "./headerstyle";
import pokemonlogo from "../Assets/pokemonlogo.svg";

export function Header(props) {
  return (
    <>
      <HeaderContainer>
        {props.returnToMainPage}
        <img src={pokemonlogo} alt="PokemonLogo" />
        {props.pokedexbutton}
        {props.addPokemonOnPokedex}
      </HeaderContainer>
    </>
  );
}

export default Header;
