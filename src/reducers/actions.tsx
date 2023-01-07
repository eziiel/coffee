/* eslint-disable no-unused-vars */
import { CoffeeContextType } from './reducer'

export enum ActionCoffesTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_DECREMENT_COFFEE = 'REMOVE_DECREMENT_COFFEE',
}

export function AddNewCoffe(newCoffee: CoffeeContextType) {
  return {
    type: ActionCoffesTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}
export function RemoveDecrementCoffe() {
  return {
    type: ActionCoffesTypes.REMOVE_DECREMENT_COFFEE,
  }
}
