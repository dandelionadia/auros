import React from 'react'
import { Box } from 'atomic-layout'
import styled from 'styled-components'
import { SubMenu, Menu } from './SubMenu'

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

interface Props {
  data: Menu[]
}

export const NavMenuMob: React.FC<Props> = ({ data }) => {
  return (
    <Box>
      <StyledUl>
        {data.map((item, index) => (
          <SubMenu
            name={item.name}
            url={item.url}
            subMenu={item.subMenu}
            key={index}
          />
        ))}
      </StyledUl>
    </Box>
  )
}
