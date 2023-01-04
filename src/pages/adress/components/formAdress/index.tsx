import React from 'react'
import * as S from './styled'
import {
  MapPinLine,
  CurrencyDollarSimple,
  Money,
  CreditCard,
  BoundingBox,
} from 'phosphor-react'

export const FormAdress = () => {
  return (
    <S.FormAdressContainer>
      <S.FormAdressTitle>Complete seu pedido</S.FormAdressTitle>
      <S.FormAdressFields>
        <S.FormAdressHeader>
          <MapPinLine size={20} color="#C47F17" />
          <span>Endereço para entrega</span>
          <span> Informe o endereço onde deseja receber a entrega</span>
        </S.FormAdressHeader>
        <S.AdressCep placeholder="CEP" />
        <S.AdressStreet placeholder="Rua" />
        <S.AdressNumber placeholder="Número" />
        <S.AdressDistrict placeholder="Bairro" />
        <S.AdressComplement placeholder="Complemento" />
        <S.AdressCity placeholder="Cidade" />
        <S.AdressState placeholder="UF" />
      </S.FormAdressFields>
      <S.FormAdressPayType>
        <S.FormAdressPayTypeHeader>
          <S.FooterHeader>
            <CurrencyDollarSimple size={20} color="#05515A" />
            <span>Pagamento</span>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </S.FooterHeader>
          <S.FooterCartPay>
            <S.FooterCartItem title="Cartão" disabled>
              <CreditCard size={20} color="#05515A" />
              cartão
            </S.FooterCartItem>
            <S.FooterCartItem title="Dinheiro" disabled>
              <Money size={20} color="#05515A" />
              dinheiro
            </S.FooterCartItem>
            <S.FooterCartItem title="Pix">
              <BoundingBox size={20} color="#05515A" />
              pix
            </S.FooterCartItem>
          </S.FooterCartPay>
        </S.FormAdressPayTypeHeader>
      </S.FormAdressPayType>
    </S.FormAdressContainer>
  )
}
