import React from 'react'
import Layout, { Box, Composition } from 'atomic-layout'
import styled from 'styled-components'

const templateMobile = `
	contacts
	products
	links
	newsletter
	legal
`

const templateMd = `
	contacts products links
	newsletter newsletter newsletter
	legal legal legal
`
const templateDesktop = `
contacts products links newsletter
legal legal legal legal
`

const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.greyDim};
  color: ${({ theme }) => theme.colors.greyLight};
  margin: 0;
`

const StyledContainerCopyright = styled.div`
  border-top: 1px solid #ddd;
`

const StyledImage = styled.img`
  height: auto;
  max-width: 100%;
  margin: 14px 0;
  display: flex;
  justify-self: center;

  @media (min-width: ${Layout.breakpoints.md.minWidth}) {
    justify-self: end;
  }
`

export const Footer: React.FC = () => {
  return (
    <Composition
      template={templateMobile}
      templateMd={templateMd}
      templatelg={templateDesktop}
      paddingHorizontal="20px"
      paddingHorizontalMd="40px"
      paddingTop="60px"
      paddingTopMd="100px"
      paddingBottom="35px"
      as={StyledFooter}
      gap={2}
    >
      {Areas => (
        <>
          <Areas.Contacts>
            <p>contacts</p>
          </Areas.Contacts>
          <Areas.Products>
            <p>Products</p>
          </Areas.Products>
          <Areas.Links>
            <p>Links</p>
          </Areas.Links>
          <Areas.Newsletter>
            <p>Newsletter</p>
          </Areas.Newsletter>
          <Areas.Legal>
            <Composition
              flex
              justifyContent="space-between"
              as={StyledContainerCopyright}
              marginTop={4.2}
              marginTopMd={7.1}
              paddingTop={2.16}
              paddingTopMd={2.2}
              templateCols="1fr"
              templateColsMd="repeat(2, 1fr)"
            >
              <Box flex justifyContentSmDown="center">
                <p>
                  Copyright © 2019
                  <a href="#">
                    <strong> Auros</strong>
                  </a>
                  . All rights reserved.
                </p>
              </Box>
              <StyledImage src="https://demo2.wpopal.com/auros/wp-content/uploads/2018/09/paypal.png"></StyledImage>
            </Composition>
          </Areas.Legal>
        </>
      )}
    </Composition>
  )
}
