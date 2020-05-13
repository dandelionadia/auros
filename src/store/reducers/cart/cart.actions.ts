import { ADD_TO_CART, DELETE_FROM_CART, CHANGE_ITEM_QUANTITY } from './types'

export const addToCart = (
  id: string,
  title: string,
  price: number,
  quantity: number = 1,
  image: string
) => {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          type: ADD_TO_CART,
          id,
          title,
          price,
          quantity,
          image,
        })
      }, 1000)
    })
  }
}

export const deleteFromCart = (id: string) => {
  return {
    type: DELETE_FROM_CART,
    id,
  }
}

export const changeItemQuantity = (id: string, quantity: number) => {
  return {
    type: CHANGE_ITEM_QUANTITY,
    id,
    quantity,
  }
}
