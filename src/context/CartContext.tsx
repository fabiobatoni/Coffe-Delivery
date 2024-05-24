import { ReactNode, createContext, useState } from "react";

export interface CoffeeDetails {
  id: number
  tags: string[]
  title: string
  description: string
  image: string
  price: number
  quantity: number
}

interface CardContextType {

  coffeesOnCart: CoffeeDetails[]

  addCoffeeToCart: (coffeeDetails: CoffeeDetails ) => void
  reduceCoffeFromCart: (id: number ) => void
  removeCoffeFromCart: (id: number ) => void
}

export const CartContext = createContext({} as CardContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children } : CartContextProviderProps) {

  const [coffeesOnCart, setCoffesOnCart] = useState<CoffeeDetails[]>([]) 

  function addCoffeeToCart(coffeeDetails: CoffeeDetails) {
    const currentCoffeIndex = coffeesOnCart.findIndex((coffee) => coffee.id === coffeeDetails.id)

    if(currentCoffeIndex >= 0) {
      setCoffesOnCart((state) => state.map((coffee, index) => index === currentCoffeIndex ? {...coffeeDetails, quantity: coffee.quantity + 1 } : coffee))
    } else {
      setCoffesOnCart(state => [...state, {...coffeeDetails, quantity: 1}])
    }

  }

  function reduceCoffeFromCart(id: number) {
    const currentCoffeIndex = coffeesOnCart.findIndex((coffee) => coffee.id === id)

    if(currentCoffeIndex >= 0) {
      setCoffesOnCart((state) => state.map((coffee, index) => index === currentCoffeIndex ? {...coffee, quantity: coffee.quantity - 1 } : coffee).filter((coffee) => coffee.quantity > 0))
    }
  }

  function removeCoffeFromCart(id: number) {
    const currentCoffeIndex = coffeesOnCart.findIndex((coffee) => coffee.id === id)

    if(currentCoffeIndex >= 0) {
      setCoffesOnCart((state) => state.filter((_, index) => index !== currentCoffeIndex))
    }
  }


  return(
    <CartContext.Provider value={{ coffeesOnCart, addCoffeeToCart,reduceCoffeFromCart, removeCoffeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}