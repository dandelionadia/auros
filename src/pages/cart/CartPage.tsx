import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IoIosArrowForward } from 'react-icons/io'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import { Grid } from '../../atoms/Grid'
import { ContainerVertical } from '../../atoms/ContainerVertical'
import { CartItemsList } from './components/CartItemsList'
import { CartSummary } from './components/CartSummary'
import { AppState } from '../../store/store'
import { getTotalPrice } from './components/CartItem'

const templateTablet = `
  cartItems
  cartTotals
`
const templateLg = `
  cartItems cartTotals
  / 1fr auto
`

const StyledTitleBar = styled.div`
  background-color: ${({ theme }) => theme.colors.greyDim};
  background-image: url('https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/breadcrumb.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  min-height: 140px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.span`
  color: ${({ theme }) => theme.colors.blackLight};
  font-size: 40px;
  font-weight: bold;
`

const StyledLinkHome = styled.div`
  color: #777;
  font-size: 13px;
  padding-right: 10px;
`

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 13px;
  padding-left: 10px;
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
      <StyledTitleBar>
        <Box paddingVertical="20px" paddingHorizontal="40px">
          <StyledTitle>Cart</StyledTitle>
          <Box flex justifyContent="center" alignItems="center">
            <StyledLinkHome as={Link} to="/">
              Home
            </StyledLinkHome>
            <Box as={IoIosArrowForward} marginTop="2px" size="10px" />
            <StyledSpan>Cart</StyledSpan>
          </Box>
        </Box>
      </StyledTitleBar>
      <Grid>
        <ContainerVertical>
          <Composition
            template={templateTablet}
            templateLg={templateLg}
            gap={2}
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
