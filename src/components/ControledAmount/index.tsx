import React from 'react'
import { ContextCoffees } from '../../context/contextCoffees/context'
import * as S from './styled'

interface CoffeeContextType {
  id: number
  title: string
  img: string
  price: string
  amount?: number | undefined
}

export const ControledAmount = ({
  id,
  title,
  img,
  price,
}: CoffeeContextType) => {
  const [AmountCoffee, setAmountCoffee] = React.useState(0)
  const { coffees, setCoffeesRequestItemAdd, setCoffeesRequestItemRemove } =
    React.useContext(ContextCoffees)

  const handleCoffeAddCart = () => {
    setCoffeesRequestItemAdd({ id, title, img, price, amount: 1 })
  }

  React.useEffect(() => {
    const Amount = coffees.find((item) => item.id === id)
    const AmountCoffeeItem = Amount?.amount || 0

    setAmountCoffee(AmountCoffeeItem)
  }, [coffees, id])

  const handleCoffeRemoveCart = () => {
    setCoffeesRequestItemRemove(id, price)
  }
  return (
    <S.CoffeeControlledAmount>
      <S.CoffeeAmount onClick={handleCoffeRemoveCart}> - </S.CoffeeAmount>
      <S.CoffeeAmountItems>{AmountCoffee}</S.CoffeeAmountItems>
      <S.CoffeeAmount onClick={handleCoffeAddCart}> + </S.CoffeeAmount>
    </S.CoffeeControlledAmount>
  )
}
