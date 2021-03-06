import React, { useState } from 'react'
import { Box } from 'atomic-layout'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import styled from 'styled-components'

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
`

const StyledContainerLi = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.15);

  :hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
  }
`

const MenuItem = styled.span`
  width: 100%;
  display: block;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
  line-height: 28px;
  padding: 10.5px 45px 10.5px 18px;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
`

const Icon = styled.div`
  color: ${({ theme }) => theme.colors.white};
  right: 0;
  top: 0;
  bottom: 0;
  width: 4em;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  background: rgba(0, 0, 0, 0.05);
  font-size: 19px;
`

const Ul = styled.ul`
  display: block;
  padding: 0;
`

const StyledSubMenuLi = styled.li`
  display: block;
  list-style: none;
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.15);

  :hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
  }
`

export interface Menu {
  name: string
  url?: string
  subMenu?: SubMenuProps[]
}

export interface SubMenuProps {
  name: string
  url: string
}

export const SubMenu: React.FC<Menu> = ({ name, url, subMenu }) => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)

  const isOpenSubmenu = () => {
    const subMenu = isOpenSubMenu
    setIsOpenSubMenu(!subMenu)
  }
  return (
    <StyledLi>
      <Box as={StyledContainerLi}>
        {url ? (
          <MenuItem as={Link} to={url}>
            {name}
          </MenuItem>
        ) : (
          <MenuItem>{name}</MenuItem>
        )}
        {subMenu && (
          <Icon onClick={isOpenSubmenu}>
            {' '}
            <IoIosArrowDown />
          </Icon>
        )}
      </Box>
      {isOpenSubMenu && subMenu && (
        <Ul>
          {subMenu.map((itemSubMenu, index) => (
            <StyledSubMenuLi key={index}>
              <MenuItem as={Link} to={itemSubMenu.url}>
                {itemSubMenu.name}
              </MenuItem>
            </StyledSubMenuLi>
          ))}
        </Ul>
      )}
    </StyledLi>
  )
}
