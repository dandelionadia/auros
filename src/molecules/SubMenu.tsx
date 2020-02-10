import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styled from 'styled-components'

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.15);

  :hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
  }
`
const Link = styled.a`
  width: 100%;
  display: block;
  color: #fff;
  font-size: 15px;
  line-height: 28px;
  padding: 10.5px 45px 10.5px 18px;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
`

const Icon = styled.div`
  color: #fff;
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
`

interface Menu {
  name: string
  subMenu: SubMenu[]
}

interface SubMenu {
  name: string
  link: string
}

export const SubMenu: React.FC<Menu> = ({ name, subMenu }) => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)

  const isOpenSubmenu = () => {
    const subMenu = isOpenSubMenu
    setIsOpenSubMenu(!subMenu)
  }
  return (
    <StyledLi>
      <Link href="#">{name}</Link>
      <Icon onClick={isOpenSubmenu}>
        <IoIosArrowDown />
      </Icon>
      {isOpenSubMenu === true
        ? subMenu && (
            <Ul>
              {subMenu.map(itemSubMenu => (
                <li>
                  <a href="#">{itemSubMenu.name}</a>
                </li>
              ))}
            </Ul>
          )
        : null}
    </StyledLi>
  )
}
