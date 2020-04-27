import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Text } from '../atoms/Text'
import { Button } from '../atoms/Button'
import { addToCart } from '../store/reducers/cart/cart.actions'

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
`

const StyledP = styled.p`
  margin: 5px 0;
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
  id,
}) => {
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    console.log('success')
    dispatch(addToCart(id, name, price))
  }

  const [isHover, setIsHover] = useState(false)
  //link which goes to the App
  const url = `/product/${id}`

  return (
    <Box
      as={StyledContainerProduct}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <StyledContainerImage>
        {/* on click change link to the our url */}
        <Link to={url}>
          <StyledImage src={isHover ? secondImage : image} alt={name} />
        </Link>
        {isHover && (
          <ProductButton onClick={() => handleAddToCart()}>
            <p>+ {buttonText}</p>
          </ProductButton>
        )}
      </StyledContainerImage>
      <Box as={StyledProductDescription} paddingVertical="25px">
        <Text big>
          <Link to={url}>{name}</Link>
        </Text>
        <StyledP>${price}</StyledP>
      </Box>
    </Box>
  )
}

export { ProductItem }
