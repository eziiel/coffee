import React from 'react'
import { ContextCoffees } from '../../../../context/context'
import { CartRequest } from './components/CartRequest'
import { CartItem } from './components/ItemCard'
import * as S from './styled'

export const FormRequest = () => {
  const { coffees } = React.useContext(ContextCoffees)

  return (
    <S.FormRequestContainer>
      <S.FormRequestTitle>Cafés selecionados</S.FormRequestTitle>
      <S.FormRequestSection>
        {coffees.map(({ id, title, img, price, totalPrice }) => (
          <CartItem
            key={id}
            title={title}
            id={id}
            img={img}
            price={price}
            totalPrice={totalPrice || '0'}
          />
        ))}
        <CartRequest />
      </S.FormRequestSection>
    </S.FormRequestContainer>
  )
}
