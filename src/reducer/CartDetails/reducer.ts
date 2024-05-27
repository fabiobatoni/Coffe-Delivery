import { CoffeeDetails } from "../../context/CartContext"
import { ActionTypes } from "./actions"

interface PayloadTypes {
  id?: number
  coffeeDetails?: CoffeeDetails
}

interface Action {
  type: ActionTypes,
  payload: PayloadTypes
}


export function cartDetailsReducer(state: CoffeeDetails[], action: Action) {
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
}