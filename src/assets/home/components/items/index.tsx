import React from 'react'
import { CoffeeCardItem } from './cardItem'
import * as S from './styled'
import Coffes from '../../../../../public/json/items.json'

export const Main = () => {
  return (
    <S.MainCardItems>
      <S.TitleItems>Nossos Cafés</S.TitleItems>
      <S.ListItems>
        {Coffes.map(({ id, img, title, info, price, type }) => (
          <li key={id}>
            <CoffeeCardItem
              id={id}
              title={title}
              info={info}
              img={img}
              price={price}
              type={type}
            />
          </li>
        ))}
      </S.ListItems>
    </S.MainCardItems>
  )
}
