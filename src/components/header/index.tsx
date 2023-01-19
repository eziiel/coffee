import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styled'
import Logo from '../../../public/img/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ContextCoffees } from '../../context/contextCoffees/context'

export const Header = () => {
  const { amountCoffes } = React.useContext(ContextCoffees)

  return (
    <S.HeaderComponent>
      <Link to="/" title="home">
        <S.LogoCoffee>
          <img src={Logo} alt="" />
        </S.LogoCoffee>
      </Link>
      <S.NavHeader>
        <S.UlHeader>
          <S.LiLocation title="Localização">
            <MapPin size={24} />
            Sinop - MT
          </S.LiLocation>
          <Link to={'/delivery'} title="pedidos        ">
            <span>pedidos</span>
          </Link>
          <S.LiCart>
            <Link to={'/adress'} title="Endereço - Carrinho">
              <S.ItensInfoSpan> {amountCoffes} </S.ItensInfoSpan>
              <ShoppingCart size={24} /* weight="bold" */ />
            </Link>
          </S.LiCart>
        </S.UlHeader>
      </S.NavHeader>
    </S.HeaderComponent>
  )
}
