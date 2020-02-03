import React from 'react'
import styled from 'styled-components'
import Layout, { Box, useResponsiveComponent } from 'atomic-layout'
import { IoIosSearch, IoMdPerson, IoMdCart } from 'react-icons/io'

const StyledBar = styled.div`
  @media (max-width: ${Layout.breakpoints.sm.maxWidth}) {
    background-color: #262626;
    color: #f3f3f3;
    width: 100%;
    position: fixed;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.09);
    bottom: 0;
    left: 0;
    padding: 10px;
  }
`

const SearchIcon = useResponsiveComponent(IoIosSearch)
const PersonIcon = useResponsiveComponent(IoMdPerson)
const CartIcon = useResponsiveComponent(IoMdCart)

export const Bar: React.FC = () => {
  return (
    <Box flex justifyContent="space-around" as={StyledBar}>
      <SearchIcon size="35" sizeMd="22" />
      <Box marginHorizontal="20px">
        <PersonIcon size="35" sizeMd="22" />
      </Box>
      <CartIcon size="35" sizeMd="22" />
    </Box>
  )
}
