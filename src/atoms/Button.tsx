import styled from 'styled-components'
import { query } from 'atomic-layout'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  text-transform: capitalize;
  padding: 16px 10px;
  border: 0;
  width: 100%;

  @media ${query({ from: 'sm' })} {
    font-size: 16px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.orangeLight};
  }
`
