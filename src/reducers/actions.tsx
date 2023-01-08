/* eslint-disable no-unused-vars */
import { CoffeeContextType } from './reducer'

export enum ActionCoffesTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_DECREMENT_COFFEE = 'REMOVE_DECREMENT_COFFEE',
}

export function AddNewCoffe(NewCoffeeCart: CoffeeContextType) {
  return {
    type: 'ADD_NEW_COFFEE',
    payload: {
      NewCoffeeCart,
    },
  }
}
export function RemoveDecrementCoffe(RemovedListCoffee: CoffeeContextType) {
  return {
    type: 'REMOVE_DECREMENT_COFFEE',
    payload: {
      RemovedListCoffee,
    },
  }
}
