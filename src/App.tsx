import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Product } from './molecules/Product'
import Layout, { Box } from 'atomic-layout'
import theme from './theme'

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
        <Box flex paddingHorizontal={3.4}>
          <Product
            image="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-21-600x675.jpg"
            secondImage="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-28-600x675.jpg"
            price="$166.26"
            productName="Mega Table Lamp"
          />
        </Box>
      </header>
    </>
  )
}

export default App
