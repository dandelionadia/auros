import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { SuccessIcon } from './SuccessIcon'

const StyledSuccessIcon = styled(SuccessIcon)`
  path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 13s linear forwards;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`

export const SuccessButton: React.FC = ({ children }) => {
  return (
    <Button>
      {children}
      <StyledSuccessIcon />
    </Button>
  )
}
