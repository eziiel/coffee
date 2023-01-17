import React from 'react'
import * as S from './styled'
import {
  MapPinLine,
  CurrencyDollarSimple,
  Money,
  CreditCard,
  BoundingBox,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { ContextAdress } from '../../../../context/contextAdress/context'

interface SetValueType {
  setValueType: (type: string) => void
}

type TypePay = 'cartao' | 'dinheiro' | 'pix' | ''

export const FormAdress = ({ setValueType }: SetValueType) => {
  const { register } = useFormContext()
  const { typePay, SetPay } = React.useContext(ContextAdress)

  const HandleType = (type: TypePay) => {
    setValueType(type)
    SetPay(type)
  }
  return (
    <S.FormAdressContainer>
      <S.FormAdressTitle>Complete seu pedido</S.FormAdressTitle>
      <S.FormAdressFields>
        <S.FormAdressHeader>
          <MapPinLine size={20} color="#C47F17" />
          <span>Endereço para entrega</span>
          <span> Informe o endereço onde deseja receber a entrega</span>
        </S.FormAdressHeader>
        <S.AdressCep placeholder="CEP" title="CEP" {...register('cep')} />
        <S.AdressStreet placeholder="Rua" title="Rua" {...register('rua')} />
        <S.AdressNumber
          placeholder="Número"
          title="Número"
          {...register('numero')}
        />
        <S.AdressDistrict
          placeholder="Bairro"
          title="Bairro"
          {...register('bairro')}
        />
        <S.AdressComplement
          placeholder="Complemento"
          title="Complemento"
          {...register('complemento')}
        />
        <S.AdressCity
          placeholder="Cidade"
          title="Cidade"
          {...register('cidade')}
        />
        <S.AdressState placeholder="UF" title="UF" {...register('uf')} />
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
            <S.FooterCartItem
              focusButton={typePay === 'cartao'}
              type="button"
              onClick={() => HandleType('cartao')}
              value="cartao"
              title="Cartão"
            >
              <CreditCard size={20} color="#05515A" />
              cartão
            </S.FooterCartItem>
            <S.FooterCartItem
              focusButton={typePay === 'dinheiro'}
              type="button"
              onClick={() => HandleType('dinheiro')}
              value="dinheiro"
              title="Dinheiro"
            >
              <Money size={20} color="#05515A" />
              dinheiro
            </S.FooterCartItem>
            <S.FooterCartItem
              focusButton={typePay === 'pix'}
              type="button"
              onClick={() => HandleType('pix')}
              value="pix"
              title="Pix"
            >
              <BoundingBox size={20} color="#05515A" />
              pix
            </S.FooterCartItem>
          </S.FooterCartPay>
        </S.FormAdressPayTypeHeader>
      </S.FormAdressPayType>
    </S.FormAdressContainer>
  )
}
