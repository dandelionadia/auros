import React, { useContext } from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { MenuContext } from '../MenuContext'

const StyledLine = styled.div`
  background-color: #000;
  width: 20px;
  height: 1px;
  margin-bottom: 5px;
`

const StyledBtn = styled.button`
  border: none;
  background-color: #fff;
`

export const Burger: React.FC = () => {
  const menu = useContext(MenuContext)

  return (
    <>
      <Box>
        <StyledBtn onClick={() => menu.setMenuOpen(!menu.isMenuOpen)}>
          <StyledLine />
          <StyledLine />
          <StyledLine />
        </StyledBtn>
      </Box>
    </>
  )
}
