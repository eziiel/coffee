import React from 'react'
import * as S from './styled'
import { ShoppingCart } from 'phosphor-react'

interface DataCoffees {
  img: string
  type: string[]
  title: string
  info: string
  price: string
}

export const CoffeeCardItem = ({
  title,
  info,
  img,
  price,
  type,
}: DataCoffees) => {
  return (
    <S.CoffeeCard>
      <S.CoffeeImg src={img} title="" />
      <S.CoffeeTypeList>
        {type.map((coffeeType) => (
          <S.CoffeeType key={coffeeType}>{coffeeType}</S.CoffeeType>
        ))}
      </S.CoffeeTypeList>
      <S.CoffeeTitle>{title}</S.CoffeeTitle>
      <S.CoffeeInfo> {info}</S.CoffeeInfo>

      <S.CoffeeBuy>
        <S.CoffeePrice>
          <S.PriceCifre>RS</S.PriceCifre>
          <S.PriceNumber>{price}</S.PriceNumber>
        </S.CoffeePrice>
        <S.CoffeeControlledAmount>
          <S.CoffeeAmount> - </S.CoffeeAmount>
          <S.CoffeeAmountItems> 5 </S.CoffeeAmountItems>
          <S.CoffeeAmount> + </S.CoffeeAmount>
        </S.CoffeeControlledAmount>
        <S.CoffeeCart>
          <ShoppingCart size={24} color="#fff" weight="fill" />
        </S.CoffeeCart>
      </S.CoffeeBuy>
    </S.CoffeeCard>
  )
}
