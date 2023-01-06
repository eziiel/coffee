import React from 'react'
import { ContextCoffees } from '../../context/context'
import * as S from './styled'

interface CoffeeContextType {
  id: number
  title: string
  amount?: number | undefined
}

export const ControledAmount = ({ amount, title, id }: CoffeeContextType) => {
  const [AmountCoffee, setAmountCoffee] = React.useState(0)
  const { coffeesRequestCart, setCoffeesRequestItem } =
    React.useContext(ContextCoffees)

  const handleCoffeAddCart = () => {
    setCoffeesRequestItem({ id, title, amount: 1 })
  }

  React.useEffect(() => {
    const Amount = coffeesRequestCart.find((item) => item.id === id)

    const AmountCoffeeItem = Amount?.amount || 0

    setAmountCoffee(AmountCoffeeItem)
  }, [coffeesRequestCart, id])

  const handleCoffeRemoveCart = () => {
    console.log(id)
  }
  return (
    <S.CoffeeControlledAmount>
      <S.CoffeeAmount onClick={handleCoffeRemoveCart}> - </S.CoffeeAmount>
      <S.CoffeeAmountItems>{AmountCoffee}</S.CoffeeAmountItems>
      <S.CoffeeAmount onClick={handleCoffeAddCart}> + </S.CoffeeAmount>
    </S.CoffeeControlledAmount>
  )
}
