import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { Link } from 'react-router-dom'
import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'

const StyledContainerProduct = styled.div`
  height: auto;
`
const StyledProductDescription = styled.div`
  text-align: center;
`
const StyledContainerImage = styled.div`
  position: relative;
`

const StyledImage = styled.img`
  margin: 0 auto;
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
  id: string
}

const ProductItem: React.FC<ProductProps> = ({
  image,
  secondImage,
  price,
  name,
  buttonText,
  id
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
        <Link to={`/product/${id}`}>
          <StyledImage src={isHover ? secondImage : image} alt={name} />
        </Link>
        {isHover && (
          <ProductButton>
            <p>+ {buttonText}</p>
          </ProductButton>
        )}
      </Box>
      <Box as={StyledProductDescription} paddingVertical="25px">
        <Text big>
          <Link to={`/product/${id}`}>{name}</Link>
        </Text>
        <p>${price}</p>
      </Box>
    </Box>
  )
}

export { ProductItem }
