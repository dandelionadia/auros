import { ADD_TO_CART } from './types'

export const addToCart = (
  id: string,
  title: string,
  price: number,
  quantity: number
) => {
  return {
    type: ADD_TO_CART,
    id,
    title,
    price,
    quantity,
  }
}
