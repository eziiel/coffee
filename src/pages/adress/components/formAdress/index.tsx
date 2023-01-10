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

interface TypePay {
  type: 'cartao' | 'dinheiro' | 'pix' | undefined
}

export const FormAdress = () => {
  const { register } = useFormContext()
  const [typePay, setTypePay] = React.useState<TypePay>()

  const handleTypePay = (typeHandle: any) => {
    const NewType = { type: typeHandle }
    setTypePay(NewType)
    console.log(typePay)
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
          type="number"
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
              type="button"
              onClick={() => handleTypePay('cartao')}
              value="cartao"
              title="Cartão"
            >
              <CreditCard size={20} color="#05515A" />
              cartão
            </S.FooterCartItem>
            <S.FooterCartItem
              type="button"
              onClick={() => handleTypePay('dinheiro')}
              value="dinheiro"
              title="Dinheiro"
            >
              <Money size={20} color="#05515A" />
              dinheiro
            </S.FooterCartItem>
            <S.FooterCartItem
              type="button"
              onClick={() => handleTypePay('pix')}
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
