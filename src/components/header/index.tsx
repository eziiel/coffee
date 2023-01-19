import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './styled'
import Logo from '../../../public/img/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ContextCoffees } from '../../context/contextCoffees/context'

export const Header = () => {
  const { amountCoffes } = React.useContext(ContextCoffees)

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
          <NavLink to={'/delivery'} title="pedidos        ">
            <span>pedidos</span>
          </NavLink>
          <S.LiCart>
            <NavLink to={'/adress'} title="Endereço - Carrinho">
              <S.ItensInfoSpan> {amountCoffes} </S.ItensInfoSpan>
              <ShoppingCart size={24} /* weight="bold" */ />
            </NavLink>
          </S.LiCart>
        </S.UlHeader>
      </S.NavHeader>
    </S.HeaderComponent>
  )
}
