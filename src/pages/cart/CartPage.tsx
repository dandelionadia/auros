import React from 'react'
import { Composition, Box } from 'atomic-layout'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'

const templateMob = `
  cart cartTotals
  / 1fr auto
`

const StyledCart = styled.div`
  border-bottom: 1px solid #eeeeee;
  line-height: 28px;
  text-align: center;
`

const StyledTotal = styled.div`
  color: #222;
  font-weight: bold;
`

const StyledPrice = styled.div`
  color: #888;
`

const ProductName = styled.div``

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
                <ProductName>
                  <span>111.2233.44</span>
                </ProductName>
                <StyledPrice>
                  <span>$199</span>
                </StyledPrice>
                <StyledInput
                  type="number"
                  id="number"
                  name="tentacles"
                  min="1"
                  max="10"
                  defaultValue="1"
                />
                <StyledTotal>
                  <span>$199</span>
                </StyledTotal>
              </Composition>
            </Areas.Cart>
            <Areas.CartTotals>
              <p>Lorem ipsum dolor sit, adipisicing elit.</p>
            </Areas.CartTotals>
          </>
        )}
      </Composition>
    </div>
  )
}
