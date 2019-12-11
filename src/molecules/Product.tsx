import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { Text } from '../atoms/Text'

const StyledContainerProduct = styled.div``
const StyledProductDescription = styled.div`
  text-align: center;
  padding: 25px 0;
`
const StyledContainerImage = styled.div`
  max-width: 500px;
  height: auto;
`
const StyledProductImage = styled.img``

interface ProductProps {
  image: string
  secondImage: string
  price: string
  productName: string
}

const Product: React.FC<ProductProps> = ({
  image,
  secondImage,
  price,
  productName
}) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Box
      as={StyledContainerProduct}
      margin="0 20px 30px 20px"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Box as={StyledContainerImage}>
        <a href="#">
          <Box
            as={StyledProductImage}
            src={isHover ? image : secondImage}
            alt="img"
          />
        </a>
      </Box>
      <Box as={StyledProductDescription}>
        <Text big>
          <a href="#">{productName}</a>
        </Text>
        <p>{price}</p>
      </Box>
    </Box>
  )
}

export { Product }
