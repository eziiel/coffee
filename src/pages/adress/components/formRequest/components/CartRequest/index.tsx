import React from 'react'
import { ContextCoffees } from '../../../../../../context/context'
import * as S from './styled'

export const CartRequest = () => {
  const { totalCoffees } = React.useContext(ContextCoffees)

  const discount: string = (totalCoffees * 0.1).toFixed(2)

  const totalWithDiscount: string = (totalCoffees - +discount).toFixed(2)

  return (
    <S.CartRequestFooter>
      <S.CartRequestInfo>
        <span>Total de itens</span>
        <span>R$ {totalCoffees}</span>
      </S.CartRequestInfo>
      <S.CartRequestInfo>
        <span>Entrega</span>
        <span>R$ {discount}</span>
      </S.CartRequestInfo>
      <S.CartRequestTotal>
        <span>Total</span>
        <span>R$ {totalWithDiscount}</span>
      </S.CartRequestTotal>
      <S.CartRequestConfirmButton type="submit">
        confirmar pedido
      </S.CartRequestConfirmButton>
    </S.CartRequestFooter>
  )
}
