import React from 'react'
import { CoffeeCardItem } from './cardItem'
import * as S from './styled'

export const Main = () => {
  return (
    <S.MainCardItems>
      <CoffeeCardItem />
      <CoffeeCardItem />
      <CoffeeCardItem />
      <CoffeeCardItem />
    </S.MainCardItems>
  )
}
