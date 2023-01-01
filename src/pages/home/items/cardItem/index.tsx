import React from 'react'
import * as S from './styled'
import Img from '../../../../../public/img/coffees/expresso-tradicional.svg'
import { ShoppingCart } from 'phosphor-react'

export const CoffeeCardItem = () => {
  return (
    <S.CoffeeCard>
      <S.CoffeeImg src={Img} title="" />
      <S.CoffeeType>tradicional</S.CoffeeType>
      <S.CoffeeTitle>expresso tradicional</S.CoffeeTitle>
      <S.CoffeeInfo>
        O tradicional café feito com água quente e grãos moídos
      </S.CoffeeInfo>

      <S.CoffeeBuy>
        <S.CoffeePrice>
          <S.PriceCifre>RS</S.PriceCifre>
          <S.PriceNumber>9,90</S.PriceNumber>
        </S.CoffeePrice>
        <S.CoffeeControlledAmount>
          <S.CoffeeAmount> - </S.CoffeeAmount>
          <S.CoffeeAmountItems> 123 </S.CoffeeAmountItems>
          <S.CoffeeAmount> + </S.CoffeeAmount>
        </S.CoffeeControlledAmount>
        <S.CoffeeCart>
          <ShoppingCart size={24} color="#fff" weight="fill" />
        </S.CoffeeCart>
      </S.CoffeeBuy>
    </S.CoffeeCard>
  )
}
