import React, { ReactNode } from 'react'

type TypePay = 'cartao' | 'dinheiro' | 'pix'

interface FormValidatorAdressSchema {
  typePay: TypePay
  SetPay: (type: TypePay) => void
}

interface TypeChildren {
  children: ReactNode
}

export const ContextAdress = React.createContext(
  {} as FormValidatorAdressSchema,
)
export const ContextAdressProvider = ({ children }: TypeChildren) => {
  const [typePay, setTypePay] = React.useState<TypePay | ''>('')

  const SetPay = (type: TypePay) => {
    const NewType = type
    setTypePay((state) => (state = NewType))
    console.log(typePay)
  }
  return (
    <ContextAdress.Provider value={{ typePay, SetPay }}>
      {children}
    </ContextAdress.Provider>
  )
}
