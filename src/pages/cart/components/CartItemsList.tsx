import React, { useCallback } from 'react'
import { CartItem } from '../../../store/reducers/cart/cart.state'
import Layout, { Composition, Box, Only } from 'atomic-layout'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'

const StyledCart = styled.div`
  border-bottom: 1px solid #eeeeee;
  line-height: 28px;
  text-align: center;
`

const StyledProductPrice = styled.div`
  color: #888;
  display: flex;
  justify-content: space-between;
`

const StyledContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.greyLight};
  width: 60px;
  padding: 5px 0;
  text-align: center;
  font-size: 1rem;
  height: fit-content;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    opacity: 1;
  }
`

const StyledImage = styled.img`
  max-width: 100px;
  height: auto;
  padding-left: 2rem;

  @media (min-width: ${Layout.breakpoints.lg.minWidth}) and (max-width: ${Layout
      .breakpoints.lg.maxWidth}) {
    width: 65px;
  }
`

const StyledProductTitles = styled.span`
  color: #666;
  font-weight: bold;
`

const StyledProductSubtotal = styled.div`
  color: #222;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`

interface CartItemsListProps {
  items: CartItem[]
}

const getTotalPrice = (item: CartItem) =>
  (item.price * item.quantity).toFixed(2)

export const CartItemsList: React.FC<CartItemsListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Composition
          as={StyledCart}
          paddingVertical={2}
          templateColsMd="1fr repeat(4,1fr)"
          gap={2}
          alignItems="center"
          justifyItemsMd="center"
        >
          <Box
            flex
            flexDirection="row"
            alignItemsMd="center"
            justifyContentSmDown="center"
          >
            <IoMdClose fill="#bbb" />
            <StyledImage src="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-1-600x675.jpg" />
          </Box>
          <Box flex flexDirection="row" justifyContent="space-between">
            <Only to="md">
              <StyledProductTitles>Product: </StyledProductTitles>
            </Only>
            <span>{item.title}</span>
          </Box>
          <StyledProductPrice>
            <Only to="md">
              <StyledProductTitles>Price: </StyledProductTitles>
            </Only>
            <span>${item.price}</span>
          </StyledProductPrice>
          <StyledContainerInput>
            <Only to="md">
              <StyledProductTitles>Quantity: </StyledProductTitles>
            </Only>
            <StyledInput
              type="number"
              id="number"
              name="tentacles"
              min="1"
              max="10"
              defaultValue={item.quantity}
            />
          </StyledContainerInput>
          <StyledProductSubtotal>
            <Only to="md">
              <StyledProductTitles>Total: </StyledProductTitles>
            </Only>
            <span>${getTotalPrice(item)}</span>
          </StyledProductSubtotal>
        </Composition>
      ))}
    </div>
  )
}
