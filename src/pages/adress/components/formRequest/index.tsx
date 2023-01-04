import React from 'react'
import { CartRequest } from './components/CartRequest'
import { CartItem } from './components/ItemCard'
import * as S from './styled'

export const FormRequest = () => {
  return (
    <S.FormRequestContainer>
      <S.FormRequestTitle>Cafés selecionados</S.FormRequestTitle>
      <S.FormRequestSection>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartRequest />
      </S.FormRequestSection>
    </S.FormRequestContainer>
  )
}
