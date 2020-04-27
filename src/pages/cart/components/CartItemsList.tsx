import React from 'react'
import { CartItem } from '../../../store/reducers/cart/cart.state'

import { useDispatch } from 'react-redux'
import {
  changeItemQuantity,
  deleteFromCart,
} from '../../../store/reducers/cart/cart.actions'
import { CartLisrItem } from '../components/CartItem'

interface CartItemsListProps {
  items: CartItem[]
}

export const CartItemsList: React.FC<CartItemsListProps> = ({ items }) => {
  const dispatch = useDispatch()

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(changeItemQuantity(id, quantity))
  }

  const handleDeleteProduct = (id: string) => {
    dispatch(deleteFromCart(id))
  }

  return (
    <div>
      {items.map((item) => (
        <CartLisrItem
          key={item.id}
          item={item}
          onDelete={handleDeleteProduct}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    </div>
  )
}
