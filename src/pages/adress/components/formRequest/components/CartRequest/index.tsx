import React from 'react'
import * as S from './styled'

export const CartRequest = () => {
  return (
    <S.CartRequestFooter>
      <S.CartRequestTotalItems>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </S.CartRequestTotalItems>
      <S.CartRequestDelivery>
        <span>Entrega</span>
        <span>R$ 3,70</span>
      </S.CartRequestDelivery>
      <S.CartRequestTotal>
        <span>Total</span>
        <span>R$ 32,70</span>
      </S.CartRequestTotal>
      <S.CartRequestConfirmButton type="submit">
        confirmar pedido
      </S.CartRequestConfirmButton>
    </S.CartRequestFooter>
  )
}
