import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Box } from 'atomic-layout'
import { MenuContext } from '../MenuContext'

const StyledLine = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 20px;
  height: 1px;
  margin-bottom: 5px;
  transition: all 1s ease-out;
`

const StyledBtn = styled.button<{ isMenuOpen: boolean }>`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 1s ease-out;
  padding: 10px;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
  transform: rotate(180deg);
  transition: all 1s ease-out;


  ${StyledLine} {
  &:nth-child(1) {
    transform: rotate(45deg) translate(6px, 7px);
  }

  &:nth-child(2) {
    opacity: 0;
  }

  &:nth-child(3) {
    transform: rotate(-45deg) translate(2px, -2px);
  }

  `}
`

export const Burger: React.FC = () => {
  const menu = useContext(MenuContext)

  return (
    <>
      <Box>
        <StyledBtn
          isMenuOpen={menu.isMenuOpen}
          onClick={() => menu.setMenuOpen(!menu.isMenuOpen)}
        >
          <StyledLine />
          <StyledLine />
          <StyledLine />
        </StyledBtn>
      </Box>
    </>
  )
}
