import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { SuccessIcon } from './SuccessIcon'
import { LoadingIcon } from './LoadingIcon'

const StyledSuccessIcon = styled(SuccessIcon)`
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: dash 1.2s linear forwards;

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`

const StyledLoadingIcon = styled(LoadingIcon)`
  transform-origin: center;
  stroke-dasharray: 90;
  stroke-dashoffset: 180;
  animation: move 2s infinite linear;

  @keyframes move {
    from {
      transform: rotate(0deg);
    }
    to {
      stroke-dashoffset: 0;
      transform: rotate(360deg);
    }
  }
`

interface AsyncButtonProps {
  state?: 'idle' | 'loading' | 'done'
}

export const AsyncButton: React.FC<AsyncButtonProps> = ({
  children,
  state = 'idle',
}) => {
  return (
    <Button>
      {children}
      {state === 'done' && <StyledSuccessIcon />}
      {state === 'loading' && <StyledLoadingIcon />}
    </Button>
  )
}
