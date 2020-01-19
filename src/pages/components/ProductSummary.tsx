import React from 'react'
import { Box, Composition } from 'atomic-layout'
import styled from 'styled-components'
import { Heading } from '../../atoms/Heading'
import { Button } from '../../atoms/Button'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
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
  line-height: 28px;
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
  margin: 15px 0;
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

interface ProductSummaryProps {
  customerReviews: number
}

const ProductSummary: React.FC<ProductSummaryProps> = ({ customerReviews }) => {
  return (
    <Composition
      template={templateMobile}
      templateMd={templateDesktop}
      gap={2}
      marginVertical={4}
    >
      {Areas => (
        <>
          <Areas.Gallery maxWidthSmOnly="400px" marginHorizontalSmOnly="auto">
            <Carousel
              images={[
                {
                  thumbnailImage: 'http://satyr.io/100x100/1',
                  fullImage: 'http://satyr.io/540x540/1'
                },
                {
                  thumbnailImage: 'http://satyr.io/100x100/2',
                  fullImage: 'http://satyr.io/540x540/2'
                },
                {
                  thumbnailImage: 'http://satyr.io/100x100/3',
                  fullImage: 'http://satyr.io/540x540/3'
                },
                {
                  thumbnailImage: 'http://satyr.io/100x100/4',
                  fullImage: 'http://satyr.io/540x540/4'
                },
                {
                  thumbnailImage: 'http://satyr.io/100x100/5',
                  fullImage: 'http://satyr.io/540x540/5'
                },
                {
                  thumbnailImage: 'http://satyr.io/100x100/6',
                  fullImage: 'http://satyr.io/540x540/6'
                }
              ]}
            />
          </Areas.Gallery>
          <Areas.Summary>
            <Heading>UNA Chair</Heading>
            <Box flex marginBottom={1.1}>
              <Box marginRight={1}>
                <Rating stars={3} />
              </Box>
              <a href="#">({customerReviews} customer reviews)</a>
            </Box>
            <StyledP>
              <StyledProdactPrice>$102.84</StyledProdactPrice>
            </StyledP>
            <StyledDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium in dolor quas maiores, non enim quos modi
              necessitatibus cumque architecto quo odio adipisci repellendus
              explicabo hic fugiat perferendis sunt. Facere.
            </StyledDescription>
            <StyledDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium in dolor quas maiores, non enim quos modi
              necessitatibus cumque architecto quo odio adipisci repellendus
              explicabo hic fugiat perferendis sunt. Facere. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ratione fuga qui rem
              repellat earum beatae quas, sit possimus aliquid quasi deleniti
              veritatis. Ratione aperiam quaerat veniam at placeat laudantium
              non.
            </StyledDescription>
            <Composition gap={1} templateCols="auto 1fr">
              <StyledInput
                type="number"
                id="number"
                name="tentacles"
                min="1"
                max="10"
                defaultValue="1"
              ></StyledInput>
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
