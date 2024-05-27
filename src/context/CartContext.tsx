import { ReactNode, createContext, useReducer, useState } from "react";

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

enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REDUCE_COFFEE = 'REDUCE_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE'
}

interface PayloadTypes {
  id?: number
  coffeeDetails?: CoffeeDetails
}

interface Action {
  type: ActionTypes,
  payload: PayloadTypes
}

export function CartContextProvider({ children } : CartContextProviderProps) {

  const [ coffeesOnCart, dispatch ] = useReducer((state: CoffeeDetails[], action: Action ) => {
    const { payload } = action
    switch(action.type) {
      case ActionTypes.ADD_COFFEE: 
        const { coffeeDetails } = payload

        if(!coffeeDetails) {
          return state
        }

        const currentCoffeIndex = state.findIndex((coffee) => coffee.id === coffeeDetails.id)

        if(currentCoffeIndex >= 0) {
          return state.map((coffee, index) => index === currentCoffeIndex ? {...coffeeDetails, quantity: coffee.quantity + 1 } : coffee)
        } else {
          return [...state, {...coffeeDetails, quantity: 1}]
        }
    
      case ActionTypes.REDUCE_COFFEE: {
        const { id } = payload

        if(!id) {
          return state
        }

        const currentCoffeIndex = state.findIndex((coffee) => coffee.id === id)

        if(currentCoffeIndex >= 0) {
          return state.map((coffee, index) => index === currentCoffeIndex ? {...coffee, quantity: coffee.quantity - 1 } : coffee).filter((coffee) => coffee.quantity > 0)
        }

        return state
      }

      case ActionTypes.REMOVE_COFFEE: {

        const { id } = payload

        if(!id) {
          return state
        }

        const currentCoffeIndex = state.findIndex((coffee) => coffee.id === id)

        if(currentCoffeIndex >= 0) {
          return state.filter((_, index) => index !== currentCoffeIndex)
        }

        return state
      }


      default:
        return state
    }
  }, [])

  function addCoffeeToCart(coffeeDetails: CoffeeDetails) {
    return dispatch({
      type: ActionTypes.ADD_COFFEE,
      payload: { coffeeDetails }
    })
  }

  function reduceCoffeFromCart(id: number) {
    return dispatch({
      type: ActionTypes.REDUCE_COFFEE,
      payload: { id }
    })
  }

  function removeCoffeFromCart(id: number) {
    return dispatch({
      type: ActionTypes.REMOVE_COFFEE,
      payload: { id }
    })
  }


  return(
    <CartContext.Provider value={{ coffeesOnCart, addCoffeeToCart,reduceCoffeFromCart, removeCoffeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}