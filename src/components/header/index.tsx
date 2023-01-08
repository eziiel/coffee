import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './styled'
import Logo from '../../../public/img/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ContextCoffees } from '../../context/context'

export const Header = () => {
  const { amountItens } = React.useContext(ContextCoffees)

  const handleCart = () => {
    console.log(amountItens)
  }

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
          <S.LiCart onClick={handleCart}>
            <NavLink to={'/Adress'} title="Endereço - Carrinho">
              <S.ItensInfoSpan> {amountItens} </S.ItensInfoSpan>
              <ShoppingCart size={24} /* weight="bold" */ />
            </NavLink>
          </S.LiCart>
        </S.UlHeader>
      </S.NavHeader>
    </S.HeaderComponent>
  )
}
