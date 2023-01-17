/* eslint-disable no-unused-vars */
import { CartSubmit } from './context'

export enum ActionFormDataValidator {
  CART_FORM_DATA = 'CART_FORM_DATA',
}

export function AddNewFormData(NewCoffeeCart: CartSubmit, action: any) {
  if (ActionFormDataValidator.CART_FORM_DATA) {
    return action.payload.cart
  } else return {}
}
