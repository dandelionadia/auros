import styled, { css } from 'styled-components'

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.blackLight};
  font-size: 2.5rem; /* 36px */
  line-height: 1;
  margin-top: 15px;
  margin-bottom: 27px;

  ${props =>
    props.as === `h2` &&
    css`
      font-size: 1.7rem; /* 24px */
    `}
`

export { Heading }
