import React from 'react'
import { useSelector } from 'react-redux'
import { Composition } from 'atomic-layout'

import { Grid } from '../../atoms/Grid'
import { ContainerVertical } from '../../atoms/ContainerVertical'
import { CartItemsList } from './components/CartItemsList'
import { CartSummary } from './components/CartSummary'
import { AppState } from '../../store/store'
import { getTotalPrice } from './components/CartItem'
import { TitleBar } from '../components/TitleBar'

const templateTablet = `
  cartItems
  cartTotals
`
const templateLg = `
  cartItems cartTotals
  / 1fr auto
`

export const CartPage: React.FC = () => {
  const cart = useSelector<AppState, any>((state) => state.cart)
  const cartTotal = useSelector<AppState, any>((state) => {
    const total = state.cart.items.reduce<number>((acc, item) => {
      return acc + getTotalPrice(item)
    }, 0)

    return total.toFixed(2)
  })

  return (
    <>
      <TitleBar titlePage="Cart" />
      <Grid fluid>
        <ContainerVertical>
          <Composition
            template={templateTablet}
            templateLg={templateLg}
            gap={4}
          >
            {(Areas) => (
              <>
                <Areas.CartItems>
                  <CartItemsList items={cart.items} />
                </Areas.CartItems>
                <Areas.CartTotals>
                  <CartSummary
                    subtotalPrice={cartTotal}
                    totalPrice={cartTotal}
                  />
                </Areas.CartTotals>
              </>
            )}
          </Composition>
        </ContainerVertical>
      </Grid>
    </>
  )
}
