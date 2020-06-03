import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import styled from 'styled-components'
import { Box } from 'atomic-layout'

const StyledTitleBar = styled.div`
  background-color: ${({ theme }) => theme.colors.greyDim};
  background-image: url('https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/breadcrumb.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  min-height: 140px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.span`
  color: ${({ theme }) => theme.colors.blackLight};
  font-size: 40px;
  font-weight: bold;
`

const StyledLinkHome = styled.div`
  color: #777;
  font-size: 13px;
  padding-right: 10px;
`

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 13px;
  padding-left: 10px;
`

interface propsTitleBar {
  titlePage: string
}

export const TitleBar: React.FC<propsTitleBar> = ({ titlePage }) => {
  return (
    <StyledTitleBar>
      <Box paddingVertical="20px" paddingHorizontal="40px">
        <StyledTitle>{titlePage}</StyledTitle>
        <Box flex justifyContent="center" alignItems="center">
          <StyledLinkHome as={Link} to="/">
            Home
          </StyledLinkHome>
          <Box as={IoIosArrowForward} marginTop="2px" size="10px" />
          <StyledSpan>{titlePage}</StyledSpan>
        </Box>
      </Box>
    </StyledTitleBar>
  )
}
