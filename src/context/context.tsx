import React, { ReactNode } from 'react'

interface CoffeeContextType {
  id: number
  title: string
  amount?: number
}

interface CoffeesContextTypes {
  coffeesRequestCart: CoffeeContextType[]
  setCoffeesRequestItem: (data: CoffeeContextType) => void
}

interface CyclesContextProps {
  children: ReactNode
}

export const ContextCoffees = React.createContext({} as CoffeesContextTypes)

export const CoffeesProvider = ({ children }: CyclesContextProps) => {
  const [coffeesRequestCart, setCoffeesRequest] = React.useState<
    CoffeeContextType[] | []
  >([])

  const setCoffeesRequestItem = (data: CoffeeContextType) => {
    const NewCoffee = {
      id: data.id,
      title: data.title,
      amount: data.amount,
    }

    const NewCoffeeCart = coffeesRequestCart.map((coffee) => {
      if (coffee.id! === NewCoffee.id) {
        coffee.amount! += 1
      }
      return coffee
    })

    const CoffeeCreate = NewCoffeeCart.find((item) => item.id === NewCoffee.id)

    if (!CoffeeCreate) {
      NewCoffeeCart.push(NewCoffee)
    }

    setCoffeesRequest((previus) => (previus = NewCoffeeCart))
  }
  return (
    <ContextCoffees.Provider
      value={{ coffeesRequestCart, setCoffeesRequestItem }}
    >
      {children}
    </ContextCoffees.Provider>
  )
}
