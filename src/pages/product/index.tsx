import React from 'react'
import { Box } from 'atomic-layout'
import { Product } from '../../molecules/Product'
import { Tabs } from '../../molecules/Tabs'

const ProductPage: React.FC = () => {
  return (
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
  )
}

export { ProductPage }
