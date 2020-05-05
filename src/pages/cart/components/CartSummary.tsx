import React from 'react'
import styled from 'styled-components'
import { Composition, Box, query } from 'atomic-layout'
import { Heading } from '../../../atoms/Heading'

const StyledProductSubtotal = styled.div`
  color: ${({ theme }) => theme.colors.blackLight};
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`

const StyledCartTotals = styled.div`
  background-color: #fafafa;
  padding: 40px;

  @media ${query({ to: 'md' })} {
    margin-bottom: 15px;
  }
`

const StyledButton = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
  border-color: ${({ theme }) => theme.colors.orange};
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
  color: ${({ theme }) => theme.colors.white};

  :hover {
    color: ${({ theme }) => theme.colors.white};
  }
`

const StyledBoxPrice = styled.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`

const StyledTotalPrice = styled.h2`
  color: ${({ theme }) => theme.colors.blackLight};
  font-size: 24px;
  margin: 0;
`

interface CartSummaryProps {
  subtotalPrice: number
  totalPrice: number
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  subtotalPrice,
  totalPrice,
}) => {
  return (
    <Box as={StyledCartTotals} widthLg="200px" widthXl="250px">
      <Heading as="h2">Cart totals</Heading>
      <Composition
        templateCols="repeat(2,1fr)"
        paddingVertical="30px"
        as={StyledBoxPrice}
      >
        <span>Subtotal:</span>
        <StyledProductSubtotal>${subtotalPrice}</StyledProductSubtotal>
      </Composition>
      <Composition
        templateCols="repeat(2,1fr)"
        paddingVertical="30px"
        alignItems="center"
        flex
        justifyContent="space-between"
      >
        <span>Total:</span>
        <StyledTotalPrice>${totalPrice}</StyledTotalPrice>
      </Composition>
      <StyledButton>
        <StyledLink href="#">Proceed To Checkout</StyledLink>
      </StyledButton>
    </Box>
  )
}
