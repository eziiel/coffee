import { ActionCoffesTypes } from './actions'

export interface CoffeeContextType {
  id: number
  title: string
  amount?: number
}

export const CoffeesReducer = (state: CoffeeContextType[], action: any) => {
  switch (action.type) {
    case ActionCoffesTypes.ADD_NEW_COFFEE: {
      return action.payload.NewCoffeeCart
    }
    case ActionCoffesTypes.REMOVE_DECREMENT_COFFEE: {
      return action.payload.RemovedListCoffee
    }
    case ActionCoffesTypes.REMOVE_ITEM_COFFEE: {
      return action.payload.RemovedListCoffee
    }
    default:
      return state
  }
}
