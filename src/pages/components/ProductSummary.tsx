import React from 'react'
import { Box, Composition } from 'atomic-layout'
import { Image } from '../../atoms/Image'
import { Heading } from '../../atoms/Heading'
import styled from 'styled-components'

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

const ProductSummary: React.FC = () => {
  return (
    <Composition
      template={templateMobile}
      templateSm={templateDesktop}
      gap={3}
      marginVertical={4}
    >
      {({ Gallery, Summary }) => (
        <>
          <Gallery>
            <Image
              src="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-32.jpg"
              alt="image"
            />
          </Gallery>
          <Summary>
            <Heading>UNA Chair</Heading>
            <Box flex marginBottom={1.1}>
              <Box marginRight={1}>⋆ ✢ ✥ ✦ ✧ ❂ ❉ ✯</Box>
              <a href="#">(5 customer reviews)</a>
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
          </Summary>
        </>
      )}
    </Composition>
  )
}

export { ProductSummary }
