import React from 'react'
import * as S from './styled'
import IMG from '../../../../../../public/img/coffees/capuccino.svg'
import { Trash } from 'phosphor-react'

export const CartItem = () => {
  return (
    <S.ItemCardRequest>
      <S.ImgCardRequest src={IMG} />
      <S.InfoItemCardRequest>
        <S.TitleItemCardRequest>expresso tradicional</S.TitleItemCardRequest>
        <div>add</div>
        <S.ButtonItemCardRequest>
          <Trash color="#05515A" />
          Remover
        </S.ButtonItemCardRequest>
      </S.InfoItemCardRequest>
      <S.PriceCardRequest>RS 9,90</S.PriceCardRequest>
    </S.ItemCardRequest>
  )
}
