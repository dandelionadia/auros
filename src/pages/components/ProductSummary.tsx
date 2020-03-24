import React from 'react'
import { Box, Composition } from 'atomic-layout'
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Heading } from '../../atoms/Heading'
import { Button } from '../../atoms/Button'
import { Rating } from '../../molecules/Rating'
import { Carousel } from '../../molecules/Carousel'

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
  color: #222;
`

const StyledAddToWishList = styled.div`
  color: #222;
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
  description: string
}

const ProductSummary: React.FC<ProductSummaryProps> = ({
  customerReviews,
  title,
  rating,
  price,
  description
}) => {
  return (
    <Composition
      template={templateMobile}
      templateMd={templateDesktop}
      gap={2}
      gapMd={4}
      marginBottom={4}
    >
      {Areas => (
        <>
          <Areas.Gallery maxWidthSmOnly="400px" marginHorizontalSmOnly="auto">
            <Carousel
              images={[
                {
                  thumbnailImage: 'http://satyr.io/150x150/1',
                  fullImage: 'http://satyr.io/750x750/1'
                },
                {
                  thumbnailImage: 'http://satyr.io/150x150/2',
                  fullImage: 'http://satyr.io/750x750/2'
                },
                {
                  thumbnailImage: 'http://satyr.io/150x150/3',
                  fullImage: 'http://satyr.io/750x750/3'
                },
                {
                  thumbnailImage: 'http://satyr.io/150x150/4',
                  fullImage: 'http://satyr.io/750x750/4'
                },
                {
                  thumbnailImage: 'http://satyr.io/150x150/5',
                  fullImage: 'http://satyr.io/750x750/5'
                },
                {
                  thumbnailImage: 'http://satyr.io/150x150/6',
                  fullImage: 'http://satyr.io/750x750/6'
                }
              ]}
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
                id="number"
                name="tentacles"
                min="1"
                max="10"
                defaultValue="1"
              />
              <Button>≙ add to card</Button>
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
