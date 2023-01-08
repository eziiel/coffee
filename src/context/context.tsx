import React, { ReactNode } from 'react'
import { AddNewCoffe, RemoveDecrementCoffe } from '../reducers/actions'
import { CoffeesReducer } from '../reducers/reducer'

interface CoffeeContextType {
  id: number
  title: string
  price: string
  totalPrice?: string
  amount?: number
}

interface CoffeesContextTypes {
  amountCoffes: number
  totalCoffees: number
  coffees: CoffeeContextType[]
  setCoffeesRequestItemAdd: (data: CoffeeContextType) => void
  setCoffeesRequestItemRemove: (id: number, price: string) => void
}

interface CyclesContextProps {
  children: ReactNode
}

export const ContextCoffees = React.createContext({} as CoffeesContextTypes)

export const CoffeesProvider = ({ children }: CyclesContextProps) => {
  const [coffees, dispatch] = React.useReducer(CoffeesReducer, [])

  const setCoffeesRequestItemAdd = ({
    id,
    title,
    price,
    amount,
  }: CoffeeContextType) => {
    const NewCoffee = {
      id,
      title,
      price,
      totalPrice: price,
      amount,
    }
    const NewCoffeeCart = coffees.map((coffee: CoffeeContextType) => {
      if (coffee.id! === NewCoffee.id) {
        coffee.amount! += 1
        coffee.totalPrice = (+coffee.totalPrice! + +NewCoffee.price).toFixed(2)
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

  const setCoffeesRequestItemRemove = (id: number, price: string) => {
    const NewListCoffee = coffees.map((coffee: CoffeeContextType) => {
      if (coffee.id === id) {
        coffee.amount! -= 1
        coffee.totalPrice = (+coffee.totalPrice! + -price).toFixed(2)
      }
      return coffee
    })
    const RemovedListCoffee = NewListCoffee.filter(
      (item: CoffeeContextType) => item.amount! > 0,
    )

    dispatch(RemoveDecrementCoffe(RemovedListCoffee))
  }

  const amountCoffes = coffees.reduce(
    (total: number, coffee: CoffeeContextType) => (total += coffee.amount!),
    0,
  )
  const totalCoffees = coffees
    .reduce(
      (total: number, coffee: CoffeeContextType) =>
        (total += +coffee.totalPrice!),
      0,
    )
    .toFixed(2)

  return (
    <ContextCoffees.Provider
      value={{
        amountCoffes,
        totalCoffees,
        coffees,
        setCoffeesRequestItemAdd,
        setCoffeesRequestItemRemove,
      }}
    >
      {children}
    </ContextCoffees.Provider>
  )
}