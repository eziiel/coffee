import React from 'react'
import * as S from './styled'
import { Trash } from 'phosphor-react'
import { ControledAmount } from '../../../../../../components/ControledAmount'
import { ContextCoffees } from '../../../../../../context/contextCoffees/context'

interface CoffeeContextType {
  id: number
  title: string
  price: string
  img: string
  totalPrice: string
}

export const CartItem = ({
  id,
  title,
  img,
  totalPrice,
  price,
}: CoffeeContextType) => {
  const { RemoveItem } = React.useContext(ContextCoffees)

  const HandleRemoveItem = () => {
    RemoveItem(id)
  }
  return (
    <S.ItemCardRequest>
      <S.ImgCardRequest src={img} />
      <S.InfoItemCardRequest>
        <S.TitleItemCardRequest>{title}</S.TitleItemCardRequest>
        <ControledAmount title={title} id={id} price={price} img={img} />
        <S.ButtonItemCardRequest onClick={HandleRemoveItem}>
          <Trash color="#05515A" />
          Remover
        </S.ButtonItemCardRequest>
        <S.PriceCardRequestResponse>
          <span>RS {price}</span>
          <span>RS {totalPrice || '0'}</span>
        </S.PriceCardRequestResponse>
      </S.InfoItemCardRequest>
      {/* <S.PriceCardRequest>
        <span>RS {price}</span>
        <span>RS {totalPrice || '0'}</span>
      </S.PriceCardRequest> */}
    </S.ItemCardRequest>
  )
}
