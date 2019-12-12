import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { Text } from '../atoms/Text'
import { ProductButton } from '../atoms/Button'

const StyledContainerProduct = styled.div`
  max-width: 500px;
  height: auto;
`
const StyledProductDescription = styled.div`
  text-align: center;
  padding: 25px 0;
`
const StyledContainerImage = styled.div`
  position: relative;
  z-index: 0;
`

interface ProductProps {
  image: string
  secondImage: string
  price: number
  productName: string
  buttonText: string
}

const Product: React.FC<ProductProps> = ({
  image,
  secondImage,
  price,
  productName,
  buttonText
}) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Box
      as={StyledContainerProduct}
      padding="0 20px 30px 20px"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box as={StyledContainerImage}>
        <a href="#">
          <img src={isHover ? secondImage : image} alt="img" />
        </a>
        {isHover && (
          <ProductButton>
            <p>+ {buttonText}</p>
          </ProductButton>
        )}
      </Box>
      <Box as={StyledProductDescription}>
        <Text big>
          <a href="#">{productName}</a>
        </Text>
        <p>${price}</p>
      </Box>
    </Box>
  )
}

export { Product }
