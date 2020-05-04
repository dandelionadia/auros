import React from 'react'
import { Box } from 'atomic-layout'
import styled from 'styled-components'

const StyledBox = styled.div`
  box-sizing: border-box;
`

interface GridProps {
  fluid?: boolean
}

export const Grid: React.FC<GridProps> = ({ children, fluid }) => {
  const maxWidths = fluid
    ? { maxWidth: '1400px' }
    : { maxWidthSm: '540px', maxWidthMd: '1200px' }

  return (
    <Box
      as={StyledBox}
      width="100%"
      {...maxWidths}
      marginHorizontal="auto"
      paddingHorizontal={2.6}
      paddingHorizontalLg={8}
    >
      {children}
    </Box>
  )
}
