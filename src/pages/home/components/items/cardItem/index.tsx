import React, { useContext } from 'react'
import * as S from './styled'
import { ShoppingCart } from 'phosphor-react'
import { ControledAmount } from '../../../../../components/ControledAmount'
import { NavLink } from 'react-router-dom'
import { ContextCoffees } from '../../../../../context/contextCoffees/context'

interface DataCoffees {
  id: number
  img: string
  type: string[]
  title: string
  info: string
  price: string
}

export const CoffeeCardItem = ({
  id,
  title,
  info,
  img,
  price,
  type,
}: DataCoffees) => {
  const { setCoffeesRequestItemAdd, coffees } = useContext(ContextCoffees)

  const handleCofeeButton = () => {
    const coffeeExist = coffees.find((item) => item.id === id)

    const NewCoffeeButton = {
      id,
      title,
      price,
      img,
      amount: 1,
    }
    if (!coffeeExist) {
      setCoffeesRequestItemAdd(NewCoffeeButton)
    }
  }

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
        <ControledAmount id={id} title={title} price={price} img={img} />
        <S.CoffeeCart>
          <NavLink to={'/adress'} onClick={handleCofeeButton}>
            <ShoppingCart size={24} color="#fff" weight="fill" />
          </NavLink>
        </S.CoffeeCart>
      </S.CoffeeBuy>
    </S.CoffeeCard>
  )
}
