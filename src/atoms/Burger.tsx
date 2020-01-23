import React from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'

const StyledContainerBurger = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
`
const StyledLine = styled.div`
  background-color: red;
  width: 25px;
  height: 1px;
  margin-bottom: 5px;
`

export const Burger: React.FC = () => {
  return (
    <Box as={StyledContainerBurger}>
      <a href="#">
        <StyledLine></StyledLine>
        <StyledLine></StyledLine>
        <StyledLine></StyledLine>
      </a>
    </Box>
  )
}
