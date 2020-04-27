import React from 'react'
import styled from 'styled-components'
import { Box, makeResponsive, query } from 'atomic-layout'
import { IoIosSearch, IoMdPerson, IoMdCart } from 'react-icons/io'
import { Link } from 'react-router-dom'
import routes from '../routes'

const StyledBar = styled.div`
  a {
    color: inherit;
  }

  @media ${query({ to: 'md' })} {
    background-color: #262626;
    color: #f3f3f3;
    width: 100%;
    position: fixed;
    z-index: 2;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.09);
    bottom: 0;
    left: 0;
    box-sizing: border-box;
  }
`

const SearchIcon = makeResponsive(IoIosSearch)
const PersonIcon = makeResponsive(IoMdPerson)
const CartIcon = makeResponsive(IoMdCart)

export const Bar: React.FC = () => {
  return (
    <Box as={StyledBar} flex justifyContent="space-around" alignItems="center">
      <Box as={SearchIcon} size="35" sizeMd="22" padding={1.5} />
      <Box flex padding={1.5}>
        <PersonIcon size="35" sizeMd="22" />
      </Box>
      <Box as={Link} to={routes.cart} flex padding={1.5}>
        <CartIcon size="35" sizeMd="22" />
      </Box>
    </Box>
  )
}
