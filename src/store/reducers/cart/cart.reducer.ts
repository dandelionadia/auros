import { CartState, initialState } from './cart.state'
import { ADD_TO_CART } from './types'

export const cartReducer = (state: CartState = initialState, action: any) => {
  if (action.type === ADD_TO_CART) {
    const nextItems = state.items.concat({
      id: action.id,
      title: action.title,
      price: action.price,
      quantity: 1,
    })

    return {
      items: nextItems,
    }
  }

  return state
}
