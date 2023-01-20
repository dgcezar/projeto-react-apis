import { HeaderBox, HeaderContainer } from "./headerstyle";
import pokemonlogo from "../Assets/pokemonlogo.svg";
import { useContext } from "react";
import { GlobalContext } from "../../Contexts/GlobalContext";

export function Header(props) {

  const context = useContext(GlobalContext)

  const { pokedexList } = context

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
