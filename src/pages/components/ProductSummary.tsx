import React, { useState } from 'react'
import { Box, Composition } from 'atomic-layout'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Heading } from '../../atoms/Heading'
import { Button } from '../../atoms/Button'
import { Rating } from '../../molecules/Rating'
import { Carousel } from '../../molecules/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store/store'

const templateMobile = `
	gallery
	summary
`

const templateDesktop = `
	gallery summary
	/ 1fr 1fr
`

const StyledDescription = styled.p`
  color: #999;
`

const StyledProdactPrice = styled.span`
  color: ${({ theme }) => theme.colors.greyLight};
  font-size: 1.7rem; /* 24px */
`

const StyledP = styled.p`
  margin: 0 0 40px;
`

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.greyLight};
  /* margin: 15px 0; */
  width: 60px;
  text-align: center;
  font-size: 1.5rem;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    opacity: 1;
  }
`
const StyledProductMeta = styled.div`
  color: #888;
  border-bottom: 1px solid #eee;
`

const StyledLink = styled.a`
  color: #888;
  margin: 0 5px;
`

const Name = styled.span`
  color: ${({ theme }) => theme.colors.blackLight};
`

const StyledAddToWishList = styled.div`
  color: ${({ theme }) => theme.colors.blackLight};
  font-weight: 600;
  margin-top: 1.2rem;
  text-transform: capitalize;
`

const StyledLinkAddToWish = styled.a`
  border-bottom: 1px solid #222;
`

export interface ProductSummaryProps {
  customerReviews: number
  title: string
  rating: number
  price: number
  images: string[]
  description: string
  onAddToCartClick: (quantity: number) => void
}

const ProductSummary: React.FC<ProductSummaryProps> = ({
  customerReviews,
  title,
  rating,
  price,
  images,
  description,
  onAddToCartClick,
}) => {
  const cartItems = useSelector<AppState, any>((state) => state.cart.items)

  const [productQuantity, setProductQuantity] = useState(1)

  return (
    <Composition
      template={templateMobile}
      templateMd={templateDesktop}
      gap={2}
      gapMd={4}
      marginBottom={4}
    >
      {(Areas) => (
        <>
          <Areas.Gallery maxWidthSmOnly="400px" marginHorizontalSmOnly="auto">
            <Carousel
              images={images.map((image) => ({
                thumbnailImage: image,
                fullImage: image,
              }))}
            />
          </Areas.Gallery>
          <Areas.Summary>
            <Heading>{title}</Heading>
            <Box flex marginBottom={1.1}>
              <Box marginRight={1}>
                <Rating stars={rating} />
              </Box>
              <a href="#">({customerReviews} customer reviews)</a>
            </Box>
            <StyledP>
              <StyledProdactPrice>${price}</StyledProdactPrice>
            </StyledP>
            <StyledDescription>{description}</StyledDescription>
            <Composition gap={1} templateCols="auto 1fr" marginVertical={2}>
              <StyledInput
                type="number"
                name="quantity"
                min="1"
                max="10"
                value={productQuantity}
                onChange={(e) => setProductQuantity(Number(e.target.value))}
              />
              <Button onClick={() => onAddToCartClick(productQuantity)}>
                ≙ add to cart
              </Button>
              <p>You have {cartItems.length} items</p>
            </Composition>
            <Box as={StyledAddToWishList}>
              <span>
                <StyledLinkAddToWish href="#">
                  + Add to wish list
                </StyledLinkAddToWish>
              </span>
            </Box>
            <Box as={StyledProductMeta} paddingVertical={2}>
              <Box marginVertical={0.5}>
                <Name>SKU:</Name>
                <span> foo</span>
              </Box>
              <Box marginVertical={0.5}>
                <Name>Foo:</Name>
                <span> foo</span>
              </Box>
            </Box>
            <Box flex marginTop={1.5}>
              <span>Share on: </span>
              <StyledLink href="#">
                <FaFacebookF />
              </StyledLink>
              <StyledLink href="#">
                <FaTwitter />
              </StyledLink>
              <StyledLink href="#">
                <FaInstagram />
              </StyledLink>
            </Box>
          </Areas.Summary>
        </>
      )}
    </Composition>
  )
}

export { ProductSummary }
