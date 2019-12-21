import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'

const StyledContainerProduct = styled.div`
  max-width: 500px;
  height: auto;
`
const StyledProductDescription = styled.div`
  text-align: center;
`
const StyledContainerImage = styled.div`
  position: relative;
`

const ProductButton = styled(Button)`
  font-size: 13px;
  font-weight: 600;
  padding: 1rem;
  margin: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  :hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`

interface ProductProps {
  image: string
  secondImage: string
  price: number
  name: string
  buttonText: string
}

const ProductItem: React.FC<ProductProps> = ({
  image,
  secondImage,
  price,
  name,
  buttonText
}) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Box
      as={StyledContainerProduct}
      paddingHorizontal="20px"
      paddingBottom="30px"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box as={StyledContainerImage}>
        <a href="#">
          <img src={isHover ? secondImage : image} alt={name} />
        </a>
        {isHover && (
          <ProductButton>
            <p>+ {buttonText}</p>
          </ProductButton>
        )}
      </Box>
      <Box as={StyledProductDescription} paddingVertical="25px">
        <Text big>
          <a href="#">{name}</a>
        </Text>
        <p>${price}</p>
      </Box>
    </Box>
  )
}

export { ProductItem }
