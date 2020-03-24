import React from 'react'
import { Box } from 'atomic-layout'

export const Grid: React.FC = ({ children }) => {
  return (
    <Box maxWidth="100%" marginHorizontal="20px" marginHorizontalLg="120px">
      {children}
    </Box>
  )
}
