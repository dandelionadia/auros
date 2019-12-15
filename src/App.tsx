import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Product } from './molecules/Product'
import Layout, { Box } from 'atomic-layout'
import { Tabs } from './molecules/Tabs'

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
      <header>
        <a href="https://reactjs.org">Learn React</a>
        <Tabs />
        <Box flex paddingHorizontal={3.4}>
          <Product
            image="
            https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-21-620x698.jpg"
            secondImage="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-21-600x675.jpg"
            productName="Mega 2 Seater Sofa"
            price={160.71}
            buttonText="add to card"
          />
          <Product
            image="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-28-600x675.jpg"
            secondImage="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-28-600x675.jpg"
            productName="Sentei Pruning Shears"
            price={141.36}
            buttonText="add to card"
          />
        </Box>
      </header>
    </>
  )
}

export default App
