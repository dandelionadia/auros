export interface CartState {
  items: CartItem[]
}

export interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  image: string
}

export const initialState: CartState = {
  items: [],
}
