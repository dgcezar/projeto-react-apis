import { HeaderContainer } from "./headerstyle"
import pokemonlogo from "../Assets/pokemonlogo.svg"

export function Header(props) {
    return(
        <>
        <HeaderContainer>
        <img src={pokemonlogo} alt="PokemonLogo" />
        {props.pokedexbutton}
        </HeaderContainer>
        </>
    )
}

export default Header