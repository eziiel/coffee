import React from 'react'
import { CartRequest } from './components/CartRequest'
import { CartItem } from './components/ItemCard'
import * as S from './styled'

export const FormRequest = () => {
  return (
    <S.FormRequestContainer>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartRequest />
    </S.FormRequestContainer>
  )
}
