import React from 'react'
import { CoffeeContextType } from '../../../context/context'

interface TypePay {
  type: 'cartao' | 'dinheiro' | 'pix' | undefined
}

interface FormValidatorAdressSchema {
  bairro: string
  cep: string
  cidade: string
  complemento: string
  numero: number
  rua: string
  uf: string
  typePay: TypePay
  coffes: CoffeeContextType[]
}

const ContextAdress = React.createContext({} as FormValidatorAdressSchema)

export const ContextAdressProvider = () => {
  return <ContextAdress.Provider value={{}}></ContextAdress.Provider>
}
