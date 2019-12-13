import styled, { css } from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 16px;
  padding: 16px;
  margin: 15px;
  border: 0;
  width: 100%;

  :hover {
    background-color: ${({ theme }) => theme.colors.orangeLight};
  }
`

export { Button }
