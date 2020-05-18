import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers/root.reducer'
import { CartState } from './reducers/cart/cart.state'
import thunk from 'redux-thunk'

export interface AppState {
  cart: CartState
}

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
)
