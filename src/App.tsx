import React from 'react'
import './App.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    font-size: 14px;
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
