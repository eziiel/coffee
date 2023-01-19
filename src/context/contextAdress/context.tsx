import React, { ReactNode } from 'react'
import { AddCartSubmit } from '../../reducers/actions'
import { AddNewFormData } from './reducer'

type TypePay = 'cartao' | 'dinheiro' | 'pix' | ''

interface CartSubmit {
  bairro: string
  cep: string
  cidade: string
  complemento?: string | undefined
  numero: string
  rua: string
  uf: string
  payType: string
  coffees: number
}

interface FormValidatorAdressSchema {
  typePay: TypePay
  SetPay: (type: TypePay) => void
  cartSubmit: CartSubmit | {}
  SetCartSubmitFunction: (cart: CartSubmit) => void
}

interface TypeChildren {
  children: ReactNode
}

export const ContextAdress = React.createContext(
  {} as FormValidatorAdressSchema,
)
export const AdressProvider = ({ children }: TypeChildren) => {
  const [typePay, setTypePay] = React.useState<TypePay>('dinheiro')
  const [cartSubmit, dispatch] = React.useReducer(AddNewFormData, {})

  const SetPay = (type: TypePay) => {
    setTypePay(type)
  }

  const SetCartSubmitFunction = (cart: CartSubmit) => {
    const newCartSubmited = cart

    dispatch(AddCartSubmit(newCartSubmited))
  }

  return (
    <ContextAdress.Provider
      value={{ typePay, SetPay, cartSubmit, SetCartSubmitFunction }}
    >
      {children}
    </ContextAdress.Provider>
  )
}
