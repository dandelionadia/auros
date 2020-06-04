import styled, { css } from 'styled-components'

interface HeadingProps {
  as?: string
}

const Heading = styled.h1<HeadingProps>`
  color: ${({ theme }) => theme.colors.blackLight};
  font-size: 2.5rem; /* 36px */
  line-height: 1;
  margin-top: 15px;
  margin-bottom: 27px;

  ${(props) =>
    props.as === `h2` &&
    css`
      font-size: 1.7rem; /* 24px */
    `}

  ${(props) =>
    props.as === `h4` &&
    css`
      font-size: 16px;
      font-weight: 600;
      line-height: 28px;
      margin: 0;
    `}

    ${(props) =>
      props.as === `h3` &&
      css`
        font-size: 18px;
        margin: 0;
      `}
`

export { Heading }
