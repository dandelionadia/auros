import React from 'react'
import { Box } from 'atomic-layout'

export const ContainerVertical: React.FC = ({ children }) => {
  return (
    <Box paddingVertical={1.3} paddingVerticalMd={2.6}>
      {children}
    </Box>
  )
}
