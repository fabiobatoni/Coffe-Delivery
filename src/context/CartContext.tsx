import { ReactNode, createContext, useReducer } from "react";
import { cartDetailsReducer } from "../reducer/CartDetails/reducer";
import { addCoffeeToCartAction, reduceCoffeeAction, removeCoffeeAction } from "../reducer/CartDetails/actions";

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

  const [ coffeesOnCart, dispatch ] = useReducer(cartDetailsReducer, [])

  function addCoffeeToCart(coffeeDetails: CoffeeDetails) {
    return dispatch(addCoffeeToCartAction(coffeeDetails))
  }

  function reduceCoffeFromCart(id: number) {
    return dispatch(reduceCoffeeAction(id))
  }

  function removeCoffeFromCart(id: number) {
    return dispatch(removeCoffeeAction(id))
  }


  return(
    <CartContext.Provider value={{ coffeesOnCart, addCoffeeToCart,reduceCoffeFromCart, removeCoffeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}