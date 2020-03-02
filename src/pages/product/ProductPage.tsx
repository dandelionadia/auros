import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { Box, Composition } from 'atomic-layout'
import { ProductItem } from '../../molecules/ProductItem'
import { Tabs } from '../../molecules/Tabs'
import { ProductSummary } from '../components/ProductSummary'

const data = [
  {
    image:
      'https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-21-620x698.jpg',
    secondImage:
      'https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-21-600x675.jpg',
    name: 'Mega 2 Seater Sofa',
    price: 160.71,
    buttonText: 'add to card'
  },
  {
    image:
      'https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-28-600x675.jpg',
    secondImage:
      'https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-28-600x675.jpg',
    name: 'Sentei Pruning Shears',
    price: 141.36,
    buttonText: 'add to card'
  },
  {
    image:
      'https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-21-620x698.jpg',
    secondImage:
      'https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-21-600x675.jpg',
    name: 'Mega 2 Seater Sofa',
    price: 160.71,
    buttonText: 'add to card'
  },
  {
    image:
      'https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-28-600x675.jpg',
    secondImage:
      'https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-28-600x675.jpg',
    name: 'Sentei Pruning Shears',
    price: 141.36,
    buttonText: 'add to card'
  }
]

interface ProductData {
  id: string
  title: string
  description: string
  price: number
  images: string[]
  relatedProducts: string[]
}

const ProductPage: React.FC<RouteComponentProps<{
  productId: string
}>> = ({ match }) => {
  const [productData, setProductData] = useState<ProductData>()
  const productId = match.params.productId
  useEffect(() => {
    fetch(
      `https://auros-api.netlify.com/.netlify/functions/api/product/${productId}`
    )
      .then(res => res.json())
      .then(res => setProductData(res))
  }, [])

  if (!productData) {
    return <p>loading...</p>
  }

  return (
    <>
      <Box
        padding={1.3}
        paddingMd={2.6}
        marginHorizontalMd={2}
        marginHorizontalLg={0}
      >
        <ProductSummary
          customerReviews={3}
          title={productData.title}
          price={productData.price}
          description={productData.description}
        />
        <Tabs />
        <Composition
          alignItems="center"
          templateCols="1fr"
          templateColsMd="repeat(2, 1fr)"
          templateColsLg="repeat(auto-fit, minmax(80px, 1fr))"
        >
          {data.map(item => (
            <ProductItem
              image={item.image}
              secondImage={item.secondImage}
              price={item.price}
              name={item.name}
              buttonText={item.buttonText}
            />
          ))}
        </Composition>
      </Box>
    </>
  )
}

export { ProductPage }
