import { ActionCoffesTypes } from './actions'

export interface CoffeeContextType {
  id: number
  title: string
  amount?: number
}
interface CoffeesList {
  coffees: CoffeeContextType[]
}

export const CoffeesReducer = (state: CoffeesList, action: any) => {
  switch (action.type) {
    case ActionCoffesTypes.ADD_NEW_COFFEE:
      return {
        ...state,
        coffees: [...state.coffees, action.payload.]
      }
  }
}
