import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  a {
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  img {
    display: flex;
    max-width: 100%;
    height: auto;
  }
`

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <header>
        <a href="https://reactjs.org">Learn React</a>
      </header>
    </>
  )
}

export default App
