import { CoffeeDetails } from "../../context/CartContext";

export enum ActionTypes {
  ADD_COFFEE = 'ADD_COFFEE',
  REDUCE_COFFEE = 'REDUCE_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE'
}

export function addCoffeeToCartAction(coffeeDetails: CoffeeDetails) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: { coffeeDetails }
  }
}

export function reduceCoffeeAction(id: number) {
  return {
    type: ActionTypes.REDUCE_COFFEE,
    payload: { id }
  }
}

export function removeCoffeeAction(id: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { id }
  }
}