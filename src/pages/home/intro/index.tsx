import React from 'react'
import * as S from './styled'
import IntroImg from '../../../../public/img/home-img.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export const IntroHome = () => {
  return (
    <S.IntroHome>
      <S.IntroShow>
        <S.IntroTitle>
          Encontre o café perfeito para você e quem você gosta,
        </S.IntroTitle>
        <S.IntroText>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora.
        </S.IntroText>

        <S.IntroInfo>
          <S.UlIntroInfo>
            <S.LiIntroInfo>
              <S.IconCart>
                <ShoppingCart color="#fff" size={20} />
              </S.IconCart>
              Compra simples e segura
            </S.LiIntroInfo>
            <S.LiIntroInfo>
              <S.IconPackage>
                <Package color="#fff" size={20} />
              </S.IconPackage>
              Embalagem mantém o café intacto
            </S.LiIntroInfo>
          </S.UlIntroInfo>

          <S.UlIntroInfo>
            <S.LiIntroInfo>
              <S.IconTimer>
                <Timer color="#fff" size={20} />
              </S.IconTimer>
              Entrega rápida e rastreada
            </S.LiIntroInfo>
            <S.LiIntroInfo>
              <S.IconCoffee>
                <Coffee color="#fff" size={20} />
              </S.IconCoffee>
              O café chega fresquinho até você
            </S.LiIntroInfo>
          </S.UlIntroInfo>
        </S.IntroInfo>
      </S.IntroShow>
      <S.IntroImg src={IntroImg} alt="Copo de cafe com grãos de café do lado" />
    </S.IntroHome>
  )
}
