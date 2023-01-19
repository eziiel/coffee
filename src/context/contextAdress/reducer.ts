/* eslint-disable no-unused-vars */

export enum ActionFormDataValidator {
  CART_FORM_DATA = 'CART_FORM_DATA',
}

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

export function AddNewFormData(state: CartSubmit, action: any) {
  if (ActionFormDataValidator.CART_FORM_DATA) {
    return action.payload.cart
  }
  return state
}
