import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './styled'
import Logo from '../../../public/img/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  return (
    <S.HeaderComponent>
      <NavLink to="/" title="home">
        <S.LogoCoffee>
          <img src={Logo} alt="" />
        </S.LogoCoffee>
      </NavLink>
      <S.NavHeader>
        <S.UlHeader>
          <S.LiLocation title="Localização">
            <MapPin size={24} />
            Sinop - MT
          </S.LiLocation>
          <S.LiCart>
            <NavLink to={'/Adress'} title="Endereço - Carrinho">
              <S.ItensInfoSpan> 3 </S.ItensInfoSpan>
              <ShoppingCart size={24} /* weight="bold" */ />
            </NavLink>
          </S.LiCart>
        </S.UlHeader>
      </S.NavHeader>
    </S.HeaderComponent>
  )
}
