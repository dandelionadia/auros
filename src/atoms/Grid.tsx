import React from 'react'
import { Box } from 'atomic-layout'
import styled from 'styled-components'

const StyledBox = styled.div`
  box-sizing: border-box;
`

export const Grid: React.FC = ({ children }) => {
  return (
    <Box
      as={StyledBox}
      width="100%"
      maxWidthSm="540px"
      maxWidthMd="1200px"
      marginHorizontal="auto"
      paddingHorizontal={2.6}
      paddingHorizontalLg={8}
    >
      {children}
    </Box>
  )
}
