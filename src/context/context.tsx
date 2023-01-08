import React, { ReactNode } from 'react'
import { AddNewCoffe, RemoveDecrementCoffe } from '../reducers/actions'
import { CoffeesReducer } from '../reducers/reducer'

interface CoffeeContextType {
  id: number
  title: string
  amount?: number
}

interface CoffeesContextTypes {
  amountItens: number
  coffees: CoffeeContextType[]
  setCoffeesRequestItemAdd: (data: CoffeeContextType) => void
  setCoffeesRequestItemRemove: (id: number) => void
}

interface CyclesContextProps {
  children: ReactNode
}

export const ContextCoffees = React.createContext({} as CoffeesContextTypes)

export const CoffeesProvider = ({ children }: CyclesContextProps) => {
  const [coffees, dispatch] = React.useReducer(CoffeesReducer, [])
  const setCoffeesRequestItemAdd = (data: CoffeeContextType) => {
    const NewCoffee = {
      id: data.id,
      title: data.title,
      amount: data.amount,
    }
    const NewCoffeeCart = coffees.map((coffee: CoffeeContextType) => {
      if (coffee.id! === NewCoffee.id) {
        coffee.amount! += 1
      }
      return coffee
    })

    const CoffeeCreate = NewCoffeeCart.find(
      (item: CoffeeContextType) => item.id === NewCoffee.id,
    )

    if (!CoffeeCreate) {
      NewCoffeeCart.push(NewCoffee)
    }

    dispatch(AddNewCoffe(NewCoffeeCart))
  }

  const setCoffeesRequestItemRemove = (id: number) => {
    const NewListCoffee = coffees.map((item: CoffeeContextType) => {
      if (item.id === id) {
        item.amount! -= 1
      }
      return item
    })
    const RemovedListCoffee = NewListCoffee.filter(
      (item: CoffeeContextType) => item.amount! > 0,
    )

    dispatch(RemoveDecrementCoffe(RemovedListCoffee))
  }

  const amountItens = coffees.reduce(
    (total: number, coffee: CoffeeContextType) => (total += coffee.amount!),
    0,
  )
  return (
    <ContextCoffees.Provider
      value={{
        amountItens,
        coffees,
        setCoffeesRequestItemAdd,
        setCoffeesRequestItemRemove,
      }}
    >
      {children}
    </ContextCoffees.Provider>
  )
}
