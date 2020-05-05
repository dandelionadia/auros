import React from 'react'
import { Composition, Box, Only, query } from 'atomic-layout'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { CartItem } from '../../../store/reducers/cart/cart.state'

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

  @media ${query({ for: 'lg' })} {
    width: 65px;
  }
`

const StyledProductTitles = styled.span`
  color: ${({ theme }) => theme.colors.greyLight};
  font-weight: bold;
`

const StyledProductSubtotal = styled.div`
  color: ${({ theme }) => theme.colors.blackLight};
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`

const StyledIconDelete = styled.div`
  padding-right: 2rem;
  :hover {
    fill: ${({ theme }) => theme.colors.black};
  }
`
interface CartListItemProps {
  onQuantityChange: (id: string, quantity: number) => void
  onDelete: (id: string) => void
  item: CartItem
}

export const getTotalPrice = (item: CartItem) => {
  return Number((item.price * item.quantity).toFixed(2))
}

export const CartListItem: React.FC<CartListItemProps> = ({
  item,
  onDelete,
  onQuantityChange,
}) => {
  return (
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
        <StyledIconDelete
          as={IoMdClose}
          fill="#bbb"
          size="25px"
          onClick={() => onDelete(item.id)}
        />
        <Link to={`/product/${item.id}`}>
          <StyledImage src={item.image} />
        </Link>
      </Box>
      <Box flex flexDirection="row" justifyContent="space-between">
        <Only to="md">
          <StyledProductTitles>Product: </StyledProductTitles>
        </Only>
        <span>
          <Link to={`/product/${item.id}`}>{item.title}</Link>
        </span>
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
          value={item.quantity}
          onChange={(e) => {
            const nextQuantity = Number(e.target.value)
            onQuantityChange(item.id, nextQuantity)
          }}
        />
      </StyledContainerInput>
      <StyledProductSubtotal>
        <Only to="md">
          <StyledProductTitles>Total: </StyledProductTitles>
        </Only>
        <span>${getTotalPrice(item)}</span>
      </StyledProductSubtotal>
    </Composition>
  )
}
