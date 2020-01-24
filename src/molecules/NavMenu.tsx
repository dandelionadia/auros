import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'

const StyledList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledContainerLi = styled.div`
  display: flex;
  align-items: flex-end;
`

const StyledUlSubMenu = styled.ul`
  box-shadow: 0px 5px 19px 1px rgba(0, 0, 0, 0.09);
  background-color: yellow;
  list-style: none;
  margin: 0;
  padding: 10px;
  position: absolute;
  z-index: 4;
  display: none;
`

const StyledLi = styled.li`
  color: #222;
  font-weight: 600;
  text-transform: capitalize;
  padding: 8px 10px;

  :hover {
    ${StyledUlSubMenu} {
      display: block;
    }
  }
`

interface HeaderProps {
  data: HeaderMenu[]
}

interface HeaderMenu {
  name: string
  subMenu: HeaderSubMenu[]
}

interface HeaderSubMenu {
  name: string
}

export const NavMenu: React.FC<HeaderProps> = ({ data }) => {
  return (
    <StyledList>
      {data.map(item => (
        <StyledLi>
          <StyledContainerLi>
            <span>{item.name}</span>
            <IoIosArrowDown />
          </StyledContainerLi>
          {item.subMenu && (
            <StyledUlSubMenu>
              {item.subMenu.map(subMenuItem => (
                <li>
                  <a href="#">{subMenuItem.name}</a>
                </li>
              ))}
            </StyledUlSubMenu>
          )}
        </StyledLi>
      ))}
    </StyledList>
  )
}
