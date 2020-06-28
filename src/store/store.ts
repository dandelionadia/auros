import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers/root.reducer'
import { CartState } from './reducers/cart/cart.state'
import thunk from 'redux-thunk'

export interface AppState {
  cart: CartState
}
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
