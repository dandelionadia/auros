import styled, { css } from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  margin: 15px;
  font-weight: 400;
  font-size: 16px;
  border: 0;
  width: 100%;

  hover {
    background-color: ${({ theme }) => theme.colors.orangeLight};
  }
`

const ProductButton = styled(Button)`
  font-size: 13px;
  padding: 1rem;
  margin: 0;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;

  hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`

export { Button, ProductButton }
