import React, { useState } from 'react'
import { Box } from 'atomic-layout'
import styled from 'styled-components'
import { SubMenu } from './SubMenu'

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
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
        {data.map((item, index) => (
          <SubMenu name={item.name} subMenu={item.subMenu} key={index} />
        ))}
      </StyledUl>
    </Box>
  )
}
