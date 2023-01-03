import React from 'react'
import * as S from './styled'

interface AmountType {
  amount: number
}
export const ControledAmount = ({ amount }: AmountType) => {
  return (
    <S.CoffeeControlledAmount>
      <S.CoffeeAmount> - </S.CoffeeAmount>
      <S.CoffeeAmountItems> {amount} </S.CoffeeAmountItems>
      <S.CoffeeAmount> + </S.CoffeeAmount>
    </S.CoffeeControlledAmount>
  )
}
