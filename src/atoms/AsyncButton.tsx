import React, { useMemo } from 'react'
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
  stroke-dasharray: 60;
  stroke-dashoffset: 120;
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

export type AsyncButtonState = 'idle' | 'loading' | 'done'

interface AsyncButtonProps {
  state?: AsyncButtonState
}

export const AsyncButton: React.FC<
  AsyncButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, state = 'idle', ...props }) => {
  const icon = useMemo(() => {
    switch (state) {
      case 'done':
        return <StyledSuccessIcon />
      case 'loading':
        return <StyledLoadingIcon />
      default:
        return children
    }
  }, [state])

  return <Button {...props}>{icon}</Button>
}
