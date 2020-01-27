import React from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { IoIosArrowDown } from 'react-icons/io'

const StyledList = styled.ul`
  display: flex;
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
  background-color: #fff;
  list-style: none;
  margin: 15px 0 0 0;
  padding: 0;
  position: absolute;
  z-index: 4;
  display: none;
  width: 250px;
`

const StyledLi = styled.li`
  color: #222;
  font-weight: 600;
  text-transform: capitalize;
  padding: 8px 15px;
  position: relative;

  :hover {
    ${StyledUlSubMenu} {
      display: block;
    }
  }

  ::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: pink;
    transition: height 0.2s ease-in-out;
  }

  :hover::after {
    height: 5px;
  }
`

const StyledSubMenuLi = styled.li`
  color: ${({ theme }) => theme.colors.grey};
  padding: 10px;
  margin: 0;
  font-weight: initial;

  :hover {
    background-color: #d8d8d8;
  }
`

const ContentLi = styled.span`
  margin-right: 5px;
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
            <Box as={ContentLi}>{item.name}</Box>
            <IoIosArrowDown />
          </StyledContainerLi>
          {item.subMenu && (
            <StyledUlSubMenu>
              {item.subMenu.map(subMenuItem => (
                <StyledSubMenuLi>
                  <a href="#">{subMenuItem.name}</a>
                </StyledSubMenuLi>
              ))}
            </StyledUlSubMenu>
          )}
        </StyledLi>
      ))}
    </StyledList>
  )
}
