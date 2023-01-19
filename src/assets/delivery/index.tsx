import React from 'react'
import * as S from './styled'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import ImgDelivery from '../../../public/img/delivery.png'

export const Delivery = () => {
  const deliveryLocal = localStorage.getItem('adress-actual-delivery-v.1.0.0')

  const Data = deliveryLocal ? JSON.parse(deliveryLocal) : 'sem informação'
  const DataCookie = JSON.parse(document.cookie)
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
              <span>
                Entrega em
                <strong> {`${Data.rua}, ${Data.numero}`}</strong>
                {/* <strong> {`${DataCookie.rua}, ${DataCookie.numero}`}</strong> */}
              </span>
              {/* <span>{`${Data.bairro} - ${Data.cidade}, ${Data.cidade}`}</span> */}
              <span>{`${DataCookie.bairro} - ${DataCookie.cidade}, ${DataCookie.cidade}`}</span>
            </S.DeliveryRequestInfoItem>

            <S.DeliveryRequestInfoItem>
              <S.IconTimer>
                <Timer size={24} color="#fff" />
              </S.IconTimer>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </S.DeliveryRequestInfoItem>

            <S.DeliveryRequestInfoItem>
              <S.IconDollar>
                <CurrencyDollar size={24} color="#fff" />
              </S.IconDollar>
              <span>Pagamento na entrega</span>
              <span>
                {/* <strong>{Data.payType}</strong> */}
                <strong>{DataCookie.payType}</strong>
              </span>
            </S.DeliveryRequestInfoItem>
          </S.DeliveryRequestInfo>
        </S.DeliveryRequestInfoBorder>
      </S.DeliveryInfo>
      <S.DeliveryImg src={ImgDelivery} alt="homem andando de moto de entrega" />
    </S.DeliveryContent>
  )
}
