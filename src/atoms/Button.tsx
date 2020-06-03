import styled from 'styled-components'

export const Button = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 16px;
  text-transform: capitalize;
  padding: 16px 10px;
  border: 0;
  width: 100%;

  :hover {
    background-color: ${({ theme }) => theme.colors.orangeLight};
  }
`
