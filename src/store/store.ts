import { createStore } from 'redux'
import { rootReducer } from './reducers/root.reducer'
import { CartState } from './reducers/cart/cart.state'

export interface AppState {
  cart: CartState
}

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
