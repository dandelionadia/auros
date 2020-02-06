import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Layout from 'atomic-layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { ProductPage } from './pages/product/ProductPage'
import { MenuContext } from './MenuContext'
import { Header } from './molecules/Header'

const BurgerMenu = styled.div<{ isOpen: boolean }>`
  background-color: yellow;
  width: 300px;
  height: 100%;
  top: 0;
  right: 0;
  margin: 0;
  position: fixed;
  z-index: 0;
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : '100%')});
  transition: transform 1s;
`

const StyledContent = styled.div<{ isMenuOpen: boolean }>`
  transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? -300 : 0)}px);
  transition: transform 1s;
`

Layout.configure({
  defaultUnit: 'rem'
})

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.greyLight};
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    margin: 0;
    overflow-x: hidden;
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
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ isMenuOpen, setMenuOpen }}>
      <GlobalStyle />
      <Router>
        <StyledContent isMenuOpen={isMenuOpen}>
          <Header />
          <Switch>
            <Route path="/product" component={ProductPage} />

            <Redirect exact from="/" to="/product" />
          </Switch>
        </StyledContent>
        <BurgerMenu isOpen={isMenuOpen}>foooo</BurgerMenu>
      </Router>
    </MenuContext.Provider>
  )
}

export default App
