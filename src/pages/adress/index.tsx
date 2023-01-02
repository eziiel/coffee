import React from 'react'
import { FormAdress } from './components/formAdress'
import { FormRequest } from './components/formRequest'
import * as S from './styled'

export const Adress = () => {
  return (
    <S.AdressContainer>
      <FormAdress />
      <FormRequest />
    </S.AdressContainer>
  )
}
