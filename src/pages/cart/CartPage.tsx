import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { Heading } from '../../atoms/Heading'

const templateMob = `
  cart cartTotals
  / 1fr auto
`

const StyledCart = styled.div`
  border-bottom: 1px solid #eeeeee;
  line-height: 28px;
  text-align: center;
`

const StyledProductSubtotal = styled.div`
  color: #222;
  font-weight: bold;
`

const StyledProductPrice = styled.div`
  color: #888;
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
`

const StyledCartTotals = styled.div`
  background-color: #fafafa;
  padding: 40px;
  min-width: 250px;
`

const StyledButton = styled.div`
  background-color: #eb7025;
  border-color: #eb7025;
  border-radius: 0px;
  font-size: 16px;
  padding: 15px;
  text-align: center;
  font-weight: bold;
`

const StyledLink = styled.a`
  color: #fff;
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

export const CartPage: React.FC = () => {
  return (
    <div>
      <Composition template={templateMob} gap={2} marginHorizontal={8}>
        {Areas => (
          <>
            <Areas.Cart>
              <Composition
                as={StyledCart}
                paddingVertical={2}
                templateCols="1fr repeat(4,1fr)"
                gap={2}
                alignItems="center"
              >
                <Box flex flexDirection="row" alignItems="center">
                  <IoMdClose fill="#bbb" />
                  <StyledImage src="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-1-600x675.jpg" />
                </Box>
                <span>111.2233.44</span>
                <StyledProductPrice>
                  <span>$199</span>
                </StyledProductPrice>
                <StyledInput
                  type="number"
                  id="number"
                  name="tentacles"
                  min="1"
                  max="10"
                  defaultValue="1"
                />
                <StyledProductSubtotal>
                  <span>$199.99</span>
                </StyledProductSubtotal>
              </Composition>
            </Areas.Cart>
            <Areas.CartTotals>
              <Box as={StyledCartTotals}>
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
    </div>
  )
}
