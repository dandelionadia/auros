import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Only, useResponsiveQuery } from 'atomic-layout'
import Layout from 'atomic-layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Bar } from './molecules/Bar'
import { ProductPage } from './pages/product/ProductPage'
import { CartPage } from './pages/cart/CartPage'
import { MenuContext } from './MenuContext'
import { Header } from './molecules/Header'
import { Footer } from './molecules/Footer'
import { NavMenuMob } from './molecules/NavMenuMob'
import { HomePage } from './pages/home/HomePage'
import { ContactPage } from './pages/contactUs/ContactPage'
import routes from './routes'
import { Page501 } from './pages/page501/Page501'
import { menuItems } from './menu'

const BurgerMenu = styled.div<{ isOpen: boolean }>`
  background-color: #353535;
  width: 300px;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  position: fixed;
  z-index: 1;
  transform: translateX(${({ isOpen }) => (isOpen ? 0 : '-100%')});
  transition: transform 1s;
`

const StyledContent = styled.div<{ isMenuOpen: boolean }>`
  transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? 300 : 0)}px);
  transition: transform 1s;
`

const StyledMaskContent = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 0;
  background: rgba(0, 0, 0, 0.4);
`

Layout.configure({
  defaultUnit: 'rem',
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
    margin: 0;
    overflow-x: hidden;
    line-height: 28px;
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
  const isLgScreen = useResponsiveQuery({ from: 'md' })

  useEffect(() => {
    if (isLgScreen) {
      setMenuOpen(false)
    }
  }, [isLgScreen])

  return (
    <MenuContext.Provider value={{ isMenuOpen, setMenuOpen }}>
      <GlobalStyle />
      <Router>
        <StyledContent isMenuOpen={isMenuOpen}>
          <Header />
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.contact} component={ContactPage} />
            <Route path="/cart" component={CartPage} />
            {/* get link from ProductItem, put it the path and go to the productPage*/}
            <Route path={routes.productDetail} component={ProductPage} />
            <Route path="*" component={Page501} />
          </Switch>
          <Footer />
        </StyledContent>
        <BurgerMenu isOpen={isMenuOpen}>
          <NavMenuMob data={menuItems} />
        </BurgerMenu>
        {isMenuOpen && <StyledMaskContent onClick={() => setMenuOpen(false)} />}
        <Only to="md">
          <Bar />
        </Only>
      </Router>
    </MenuContext.Provider>
  )
}

export default App
