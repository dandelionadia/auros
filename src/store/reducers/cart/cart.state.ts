export interface CartState {
  items: CartItem[]
}

export interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
}

export const initialState: CartState = {
  items: [
    {
      id: '1',
      title: 'Foo',
      price: 20.2,
      quantity: 1,
    },
  ],
}