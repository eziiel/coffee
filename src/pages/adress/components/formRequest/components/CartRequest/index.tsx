import React from 'react'
import * as S from './styled'

export const CartRequest = () => {
  return (
    <S.CartRequestFooter>
      <S.CartRequestInfo>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </S.CartRequestInfo>
      <S.CartRequestInfo>
        <span>Entrega</span>
        <span>R$ 3,70</span>
      </S.CartRequestInfo>
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
