import { ADD_TO_CART, DELETE_FROM_CART } from './types'

export const addToCart = (
  id: string,
  title: string,
  price: number,
  quantity: number = 1
) => {
  return {
    type: ADD_TO_CART,
    id,
    title,
    price,
    quantity,
  }
}

export const deleteFromCart = (id: string) => {
  return {
    type: DELETE_FROM_CART,
    id,
  }
}
