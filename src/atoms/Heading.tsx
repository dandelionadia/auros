import styled, { css } from 'styled-components'

interface HeadingProps {
  as?: string
}

const Heading = styled.h1<HeadingProps>`
  font-size: 2.5rem; /* 36px */

  ${props =>
    props.as === `h2` &&
    css`
      font-size: 1.7rem; /* 24px */
    `}
`

export { Heading }
