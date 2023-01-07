import React, { ReactNode } from 'react'

interface CoffeeContextType {
  id: number
  title: string
  amount?: number
}

interface CoffeesContextTypes {
  coffees: CoffeeContextType[]
  setCoffeesRequestItemAdd: (data: CoffeeContextType) => void
  setCoffeesRequestItemRemove: (id: number) => void
}

interface CyclesContextProps {
  children: ReactNode
}

export const ContextCoffees = React.createContext({} as CoffeesContextTypes)

export const CoffeesProvider = ({ children }: CyclesContextProps) => {
  const [coffees, dispatch] = React.useReducer(
    (state: CoffeeContextType[], action: any) => {
      if (action.type === 'ADD_NEW_COFFEE') {
        return action.payload.NewCoffeeCart
      }
      if (action.type === 'REMOVE_DECREMENT_COFFEE') {
        return action.payload.RemovedListCoffee
      }
      return state
    },
    [],
  )
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

    dispatch({
      type: 'ADD_NEW_COFFEE',
      payload: {
        NewCoffeeCart,
      },
    })
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

    dispatch({
      type: 'REMOVE_DECREMENT_COFFEE',
      payload: {
        RemovedListCoffee,
      },
    })
  }

  return (
    <ContextCoffees.Provider
      value={{
        coffees,
        setCoffeesRequestItemAdd,
        setCoffeesRequestItemRemove,
      }}
    >
      {children}
    </ContextCoffees.Provider>
  )
}
