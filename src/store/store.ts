import { createStore } from 'redux'

const initialState = {
  items: []
}

export function addToCart(productId: number) {
  return {
    type: 'ADD_TO_CARD',
    payload: {
      productId
    }
  }
}

function cartReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'ADD_TO_CARD':
      const nextItems = state.items.concat(action.payload.productId)
      return {
        items: nextItems
      }

    default:
      return state
  }
}

export const store = createStore(
  cartReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
