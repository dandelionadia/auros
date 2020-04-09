import React from 'react'
import { Link } from 'react-router-dom'
import Layout, { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { Heading } from '../../atoms/Heading'
import { Grid } from '../../atoms/Grid'
import { CartItemsList } from './components/CartItemsList'
import { useStore, useSelector } from 'react-redux'

const templateTablet = `
cartItems
cartTotals
`
const templateLg = `
cartItems cartTotals
  / 1fr auto
`

const StyledProductSubtotal = styled.div`
  color: #222;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`

const StyledCartTotals = styled.div`
  background-color: #fafafa;
  padding: 40px;

  @media (max-width: ${Layout.breakpoints.sm.maxWidth}) {
    margin-bottom: 15px;
  }
`

const StyledButton = styled.div`
  background-color: #eb7025;
  border-color: #eb7025;
  border-radius: 0px;
  font-size: 16px;
  padding: 15px;
  text-align: center;
  font-weight: bold;

  :hover {
    background-color: #c95813;
    border-color: #c95813;
  }
`

const StyledLink = styled.a`
  color: #fff;

  :hover {
    color: #fff;
  }
`

const StyledBoxPrice = styled.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`

const StyledTotalPrice = styled.h2`
  color: #222;
  font-size: 24px;
  margin: 0;
`

const StyledTitleBar = styled.div`
  background-color: '#fff';
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
  color: #222;
  font-size: 40px;
  font-weight: bold;
`

const StyledLinkHome = styled.div`
  color: #777;
  font-size: 13px;
  padding-right: 10px;
`

const StyledSpan = styled.span`
  color: #000;
  font-size: 13px;
  padding-left: 10px;
`

export const CartPage: React.FC = () => {
  const cart = useSelector<any, any>((state) => state.cart)

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
        <Composition template={templateTablet} templateLg={templateLg} gap={2}>
          {(Areas) => (
            <>
              <Areas.CartItems>
                <CartItemsList items={cart.items} />
              </Areas.CartItems>
              <Areas.CartTotals>
                <Box as={StyledCartTotals} widthLg="200px" widthXl="250px">
                  <Heading as="h2">Cart totals</Heading>
                  <Composition
                    templateCols="repeat(2,1fr)"
                    paddingVertical="30px"
                    as={StyledBoxPrice}
                  >
                    <span>Subtotal:</span>
                    <StyledProductSubtotal>$199.99</StyledProductSubtotal>
                  </Composition>
                  <Composition
                    templateCols="repeat(2,1fr)"
                    paddingVertical="30px"
                    alignItems="center"
                    flex
                    justifyContent="space-between"
                  >
                    <span>Total:</span>
                    <StyledTotalPrice>$199.99</StyledTotalPrice>
                  </Composition>
                  <StyledButton>
                    <StyledLink href="#">Proceed To Checkout</StyledLink>
                  </StyledButton>
                </Box>
              </Areas.CartTotals>
            </>
          )}
        </Composition>
      </Grid>
    </>
  )
}
