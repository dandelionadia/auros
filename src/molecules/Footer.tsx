import React from 'react'
import { Box, Composition, query } from 'atomic-layout'
import styled from 'styled-components'
import { Logo } from '../atoms/Logo'
import { Heading } from '../atoms/Heading'
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoVk,
} from 'react-icons/io'

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
  line-height: 24px;

  @media ${query({ to: 'md' })} {
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

  @media ${query({ from: 'md' })} {
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

const StyledEmail = styled.span`
  border-bottom: 2px solid #f9d4bd;
`

const StyledContainer = styled.div`
  margin-bottom: 45px;

  @media ${query({ to: 'md' })} {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
`

const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.01);
  border-style: solid;
  border-width: 0 0 2px;
  border-color: #ddd;
  padding: 15px 0;
  text-align: center;
  width: 100%;

  @media ${query({ from: 'md' })} {
    text-align: left;
  }
`

const StyledBtnSubmit = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: #222;
  padding: 15px 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-style: solid;
  border-width: 0 0 2px;
  border-color: #ddd;
  text-align: center;

  :hover {
    color: ${({ theme }) => theme.colors.orange};
    border-color: ${({ theme }) => theme.colors.orange};
  }

  @media ${query({ from: 'md' })} {
    min-width: 130px;
  }
`

const StyledContainerNewsletter = styled.div`
  @media ${query({ for: 'md' })} {
    text-align: center;
  }
  @media ${query({ to: 'sm' })} {
    margin-bottom: -20px;
  }
`

const StyledLinkSocial = styled.a`
  color: #888;
  padding-right: 15px;
`

export const Footer: React.FC = () => {
  return (
    <Composition
      template={templateMobile}
      templateMd={templateMd}
      templateLg={templateDesktop}
      paddingHorizontal="20px"
      paddingHorizontalMd="40px"
      paddingTop="60px"
      paddingTopLg="80px"
      paddingBottom="85px"
      paddingBottomMd="25px"
      as={StyledFooter}
      gap={2}
      flex
      justifyContentSmDown="center"
    >
      {(Areas) => (
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
                <Box as="p" marginTop={0}>
                  (+91)0-000-1111
                </Box>
                <a href="#">
                  <StyledEmail>Aurosfurniture@domain.vn</StyledEmail>
                </a>
              </div>
            </Composition>
          </Areas.Contacts>
          <Areas.Products>
            <StyledContainer>
              <Heading as="h4">Our Products</Heading>
            </StyledContainer>
            <StyledLink href="#">
              <StyledP>Checkout</StyledP>
            </StyledLink>
          </Areas.Products>
          <Areas.Links>
            <StyledContainer>
              <Heading as="h4">Useful Links</Heading>
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
            <Box as={StyledContainerNewsletter}>
              <StyledContainer>
                <Heading as="h4">Newsletter</Heading>
              </StyledContainer>
              <p>Stay Updated on all that’s new add noteworthy</p>
            </Box>
            <Composition
              gapCol={1}
              templateCols="1fr"
              templateColsMd="1fr auto"
              marginVertical={2}
            >
              <StyledInput
                type="email"
                name="email"
                placeholder="Enter your e-mail..."
                required
              />
              <StyledBtnSubmit type="submit">Subscribe</StyledBtnSubmit>
            </Composition>
            <Box as={StyledContainerNewsletter}>
              <StyledLinkSocial href="#">
                <IoLogoFacebook size="25" />
              </StyledLinkSocial>
              <StyledLinkSocial href="#">
                <IoLogoTwitter size="25" />
              </StyledLinkSocial>
              <StyledLinkSocial href="#">
                <IoLogoInstagram size="25" />
              </StyledLinkSocial>
              <StyledLinkSocial href="#">
                <IoLogoVk size="25" />
              </StyledLinkSocial>
            </Box>
          </Areas.Newsletter>
          <Areas.Legal>
            <Composition
              flex
              justifyContent="space-between"
              as={StyledContainerCopyright}
              marginTop={1}
              marginTopMd={2}
              paddingTop={2.16}
              paddingTopMd="25px"
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
              <StyledImage src="https://demo2.wpopal.com/auros/wp-content/uploads/2018/09/paypal.png" />
            </Composition>
          </Areas.Legal>
        </>
      )}
    </Composition>
  )
}
