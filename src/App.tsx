import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Layout from 'atomic-layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { ProductPage } from './pages/product/ProductPage'

Layout.configure({
  defaultUnit: 'rem'
})

const GlobalStyle = createGlobalStyle`
  html {

    font-size: 14px;
  }

  body {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.greyLight};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.blackLight};
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
      <Router>
        <Switch>
          <Route path="/product" component={ProductPage} />

          <Redirect exact from="/" to="/product" />
        </Switch>
      </Router>
    </>
  )
}

export default App
