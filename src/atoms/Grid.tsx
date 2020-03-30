import React from 'react'
import { Box } from 'atomic-layout'

export const Grid: React.FC = ({ children }) => {
  return (
    <Box padding={1.3} paddingMd={2.6} marginHorizontalLgDown={2}>
      {children}
    </Box>
  )
}
