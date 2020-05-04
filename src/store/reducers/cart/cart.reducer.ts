import { CartState, initialState } from './cart.state'
import { ADD_TO_CART, DELETE_FROM_CART, CHANGE_ITEM_QUANTITY } from './types'

export const cartReducer = (state: CartState = initialState, action: any) => {
  if (action.type === ADD_TO_CART) {
    const stateItems = state.items

    // ...try to find exist index if not going then go to the nextItems
    const existingIndex = stateItems.findIndex((item) => {
      return item.id === action.id
    })

    if (existingIndex >= 0) {
      stateItems[existingIndex].quantity =
        stateItems[existingIndex].quantity + action.quantity

      return {
        items: stateItems,
      }
    }

    //adds new product
    const nextItems = state.items.concat({
      id: action.id,
      title: action.title,
      price: action.price,
      quantity: action.quantity,
      image: action.image,
    })

    return {
      items: nextItems,
    }
  }

  if (action.type === DELETE_FROM_CART) {
    const nextItems = state.items.filter((item) => {
      return item.id !== action.id
    })

    return {
      items: nextItems,
    }
  }

  if (action.type === CHANGE_ITEM_QUANTITY) {
    const existingIndex = state.items.findIndex((item) => {
      return item.id === action.id
    })

    state.items[existingIndex].quantity = action.quantity

    return {
      items: state.items,
    }
  }

  return state
}
