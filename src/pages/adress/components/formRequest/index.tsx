import React from 'react'
import { CartItem } from './components/cartItem'
import * as S from './styled'

export const FormRequest = () => {
  return (
    <S.FormRequestContainer>
      <CartItem />
      <CartItem />
    </S.FormRequestContainer>
  )
}
