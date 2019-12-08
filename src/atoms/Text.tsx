import styled, { css } from 'styled-components'

interface TextProps {
  big?: string
  small?: string
}

const Text = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.greyLight};

  ${props =>
    props.big &&
    css`
      color: ${({ theme }) => theme.colors.blackLight};
      font-size: 16px;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 13px;
    `};
`

export { Text }
