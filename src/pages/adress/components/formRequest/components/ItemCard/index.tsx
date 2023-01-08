import React from 'react'
import * as S from './styled'
import IMG from '../../../../../../../public/img/coffees/capuccino.svg'
import { Trash } from 'phosphor-react'
import { ControledAmount } from '../../../../../../assets/ControledAmount'

interface CoffeeContextType {
  id: number
  title: string
  price: string
  amount?: number | undefined
}

export const CartItem = ({ id, title, price }: CoffeeContextType) => {
  return (
    <S.ItemCardRequest>
      <S.ImgCardRequest src={IMG} />
      <S.InfoItemCardRequest>
        <S.TitleItemCardRequest>expresso tradicional</S.TitleItemCardRequest>
        <ControledAmount title={title} id={id} price={price} />
        <S.ButtonItemCardRequest>
          <Trash color="#05515A" />
          Remover
        </S.ButtonItemCardRequest>
      </S.InfoItemCardRequest>
      <S.PriceCardRequest>RS {price}</S.PriceCardRequest>
    </S.ItemCardRequest>
  )
}
