import React from 'react'
import * as S from './styled'
import { MapPinLine, CurrencyDollarSimple } from 'phosphor-react'

export const FormAdress = () => {
  return (
    <S.FormAdressContainer>
      <S.FormAdressFields>
        <S.FormAdressHeader>
          <MapPinLine size={20} color="#C47F17" />
          <span>Endereço para entrega</span>
          <span> Informe o endereço onde deseja receber a entrega</span>
        </S.FormAdressHeader>
        <S.AdressCep />
        <S.AdressStreet />
        <S.AdressNumber />
        <S.AdressDistrict />
        <S.AdressComplement />
        <S.AdressCity />
        <S.AdressState />
      </S.FormAdressFields>
      <S.FormAdressPayType>
        <S.FormAdressPayTypeHeader>
          <CurrencyDollarSimple />
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </S.FormAdressPayTypeHeader>
      </S.FormAdressPayType>
    </S.FormAdressContainer>
  )
}
