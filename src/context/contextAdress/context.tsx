import React, { ReactNode } from 'react'
import { AddNewFormData } from './reducer'

type TypePay = 'cartao' | 'dinheiro' | 'pix' | ''

export interface CartSubmit {
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
  const [typePay, setTypePay] = React.useState<TypePay>('')
  const [cartSubmit, dispatch] = React.useReducer(AddNewFormData, {})

  const SetPay = (type: TypePay) => {
    setTypePay(type)
  }

  const SetCartSubmitFunction = (cart: CartSubmit) => {
    dispatch({
      type: 'CART_FORM_DATA',
      payload: {
        cart,
      },
    })
  }

  return (
    <ContextAdress.Provider
      value={{ typePay, SetPay, cartSubmit, SetCartSubmitFunction }}
    >
      {children}
    </ContextAdress.Provider>
  )
}
