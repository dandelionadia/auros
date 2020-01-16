import React from 'react'
import { Box } from 'atomic-layout'
import { ProductItem } from '../../molecules/ProductItem'
import { Tabs } from '../../molecules/Tabs'
import { ProductSummary } from '../components/ProductSummary'

const ProductPage: React.FC = () => {
  return (
    <Box
      padding={1.4}
      paddingMd={2.8}
      marginHorizontalMd={2}
      marginHorizontalLg={4.2}
    >
      <a href="https://reactjs.org">Learn React</a>
      <ProductSummary customerReviews={3} />
      <Tabs />
      <Box flex>
        <ProductItem
          image="
            https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-21-620x698.jpg"
          secondImage="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-21-600x675.jpg"
          name="Mega 2 Seater Sofa"
          price={160.71}
          buttonText="add to card"
        />
        <ProductItem
          image="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-28-600x675.jpg"
          secondImage="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-28-600x675.jpg"
          name="Sentei Pruning Shears"
          price={141.36}
          buttonText="add to card"
        />
      </Box>
    </Box>
  )
}

export { ProductPage }