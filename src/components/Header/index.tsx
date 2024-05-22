import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import logoCoffe from '../../assets/Logo.svg'
import { MapPin, ShoppingCartSimple } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer >
      <img src={logoCoffe} alt="" />
      <nav>
        <NavLink to="/" title="">
         <MapPin size={24} weight="fill"/>
         São Paulo, SP
        </NavLink> 
        <NavLink to="/" title="">
          <ShoppingCartSimple size={24} weight="fill"/>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}