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

  hover {
    background-color: ${({ theme }) => theme.colors.orangeLight};
  }
`

const ProductButton = styled(Button)`
  font-size: 13px;
  font-weight: 600;
  padding: 1rem;
  margin: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`

export { Button, ProductButton }
