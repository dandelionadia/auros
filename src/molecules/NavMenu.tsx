import React from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  border: 1px solid red;
  margin: 0;
  padding: 0;
`

const StyledLi = styled.li`
  color: #222;
  font-weight: 600;
  text-transform: capitalize;
  padding: 8px 10px;
  display: flex;
  align-items: center;
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
          <span>{item.name}</span>
          <IoIosArrowDown />
        </StyledLi>
      ))}
    </StyledList>
  )
}
