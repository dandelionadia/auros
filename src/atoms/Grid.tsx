import React from 'react'
import { Box } from 'atomic-layout'

export const Grid: React.FC = ({ children }) => {
  return (
    <Box
      paddingVertical={1.3}
      paddingVerticalMd={2.6}
      marginHorizontal={2.6}
      marginHorizontalLg={8}
    >
      {children}
    </Box>
  )
}
