import { HeaderBox, HeaderContainer } from "./headerstyle";
import pokemonlogo from "../Assets/pokemonlogo.svg";

export function Header(props) {
  return (
    <>
      <HeaderContainer>
        <HeaderBox>
          {props.returnToMainPage}
          <img src={pokemonlogo} alt="PokemonLogo" />
          {props.pokedexbutton}
          {props.AddOrRemoveButton}
        </HeaderBox>
      </HeaderContainer>
    </>
  );
}

export default Header;
