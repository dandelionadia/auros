import React from 'react'
import { Box } from 'atomic-layout'
import styled from 'styled-components'

const StyledUl = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
`

const StyledLi = styled.li`
  :hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px rgba(0, 0, 0, 0);
  }
`

const Link = styled.a`
  display: block;
  color: #fff;
  font-size: 15px;
  line-height: 28px;
  padding: 10.5px 45px 10.5px 18px;
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.15);
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
`

interface Props {
  data: Menu[]
}

interface Menu {
  name: string
  subMenu: SubMenu[]
}

interface SubMenu {
  name: string
  link: string
}

export const NavMenuMob: React.FC<Props> = ({ data }) => {
  return (
    <Box>
      <StyledUl>
        {data.map(item => (
          <StyledLi>
            <Link href="#">{item.name}</Link>
          </StyledLi>
        ))}
      </StyledUl>
    </Box>
  )
}
