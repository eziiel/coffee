import React from 'react'
import * as S from './styled'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export const Delivery = () => {
  return (
    <S.DeliveryContent>
      <S.DeliveryInfo>
        <S.DeliveryInfoTitle>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </S.DeliveryInfoTitle>
        <S.DeliveryRequestInfoBorder>
          <S.DeliveryRequestInfo>
            <S.DeliveryRequestInfoItem>
              <S.IconMap>
                <MapPin size={24} color="#fff" />
              </S.IconMap>
              <span>Entrega em Rua João Daniel Martinelli, 102</span>
              <span>Farrapos - Porto Alegre, RS</span>
            </S.DeliveryRequestInfoItem>

            <S.DeliveryRequestInfoItem>
              <S.IconTimer>
                <Timer size={24} color="#fff" />
              </S.IconTimer>
              <span>Previsão de entrega</span>
              <span>20 min - 30 min</span>
            </S.DeliveryRequestInfoItem>

            <S.DeliveryRequestInfoItem>
              <S.IconDollar>
                <CurrencyDollar size={24} color="#fff" />
              </S.IconDollar>
              <span>Pagamento na entrega</span>
              <span>Cartão de Crédito</span>
            </S.DeliveryRequestInfoItem>
          </S.DeliveryRequestInfo>
        </S.DeliveryRequestInfoBorder>
      </S.DeliveryInfo>
    </S.DeliveryContent>
  )
}
