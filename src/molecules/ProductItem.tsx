import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, query } from 'atomic-layout'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Text } from '../atoms/Text'
import { addToCart } from '../store/reducers/cart/cart.actions'
import { AsyncButton, AsyncButtonState } from '../atoms/AsyncButton'

const ProductButton = styled(AsyncButton)`
  font-size: 13px;
  font-weight: 600;
  padding: 1rem;
  margin: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  @media ${query({ from: 'sm' })} {
    position: absolute;
    transform: translateY(100%);
    transition: transform 0.2s ease-in-out;
  }
`

const StyledContainerProduct = styled.div`
  height: auto;

  @media ${query({ from: 'sm' })} {
    :hover ${ProductButton} {
      transform: translateY(0);
    }
  }
`
const StyledProductDescription = styled.div`
  text-align: center;
`
const StyledContainerImage = styled.div`
  position: relative;
  overflow: hidden;
`

const StyledImage = styled.img`
  margin: 0 auto;
`

const StyledP = styled.p`
  margin: 5px 0;
`

interface ProductProps {
  images: string[]
  price: number
  name: string
  buttonText: string
  id: string
}

const ProductItem: React.FC<ProductProps> = ({
  images,
  price,
  name,
  buttonText,
  id,
}) => {
  // 1. state (idle/loading/done)
  const [asyncButtonState, setAsyncButtonState] = useState<AsyncButtonState>()
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    // 2. set state "loading"
    setAsyncButtonState('loading')
    dispatch(addToCart(id, name, price, 1, images[0]))
      // @ts-ignore
      .then(() => {
        setAsyncButtonState('done')
        setTimeout(() => {
          setAsyncButtonState('idle')
        }, 2000)
      })
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
          <StyledImage src={isHover ? images[1] : images[0]} alt={name} />
        </Link>
        <ProductButton onClick={handleAddToCart} state={asyncButtonState}>
          <p>+ {buttonText}</p>
        </ProductButton>
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
