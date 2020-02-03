import React from 'react'
import Layout, { Box, Composition } from 'atomic-layout'
import styled from 'styled-components'
import { Logo } from '../atoms/Logo'
import { Text } from '../atoms/Text'

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

  @media (max-width: ${Layout.breakpoints.sm.maxWidth}) {
    text-align: center;
  }
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

const StyledContact = styled.div`
  color: ${({ theme }) => theme.colors.blackLight};
`

const StyledP = styled.p`
  margin: 0;
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.greyLight};
`

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const StyledList = styled.li`
  margin-bottom: 10px;
`

const StyledNumber = styled.p`
  margin-top: 0;
`

const StyledEmail = styled.span`
  border-bottom: 2px solid #f9d4bd;
`

const StyledContainer = styled.div`
  margin-bottom: 45px;

  @media (max-width: ${Layout.breakpoints.sm.maxWidth}) {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
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
      paddingToplg="100px"
      paddingBottom="35px"
      as={StyledFooter}
      gap={2}
      flex
      justifyContentSmDown="center"
    >
      {Areas => (
        <>
          <Areas.Contacts>
            <StyledContainer>
              <Logo src="https://demo2.wpopal.com/auros/wp-content/uploads/2019/02/Logo.svg" />
            </StyledContainer>
            <Composition as={StyledContact} gap={2} templateCols="1fr">
              <div>
                <StyledP>
                  2593 Timbercrest Road, Chisana, Alaska Badalas
                </StyledP>
                <StyledP>United State</StyledP>
              </div>
              <div>
                <StyledNumber>(+91)0-000-1111</StyledNumber>
                <a href="#">
                  <StyledEmail>Aurosfurniture@domain.vn</StyledEmail>
                </a>
              </div>
            </Composition>
          </Areas.Contacts>
          <Areas.Products>
            <StyledContainer>
              <Text big>Our Products</Text>
            </StyledContainer>
            <StyledLink href="#">
              <StyledP>Checkout</StyledP>
            </StyledLink>
          </Areas.Products>
          <Areas.Links>
            <StyledContainer>
              <Text big>Useful Links</Text>
            </StyledContainer>
            <StyledUl>
              <StyledList>
                <StyledLink href="#">About Us</StyledLink>
              </StyledList>
              <StyledList>
                <StyledLink href="#">Blog</StyledLink>
              </StyledList>
              <StyledList>
                <StyledLink href="#">Contact Us</StyledLink>
              </StyledList>
            </StyledUl>
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
