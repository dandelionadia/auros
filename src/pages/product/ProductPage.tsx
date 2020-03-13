import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { Box } from 'atomic-layout'
import { RecomendedProducts } from '../../molecules/RecomendedProducts'
import { Tabs } from '../../molecules/Tabs'
import { ProductSummary } from '../components/ProductSummary'

export interface ProductData {
  id: string
  title: string
  description: string
  rating: number
  price: number
  images: string[]
  relatedProducts: string[]
  shopAttributes: ProductAttributes[]
  reviews: ProductReview[]
}

export interface ProductAttributes {
  title: string
  data: number | string
}

export interface ProductReview {
  name: string
  date: string
  rating: number
  text: string
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
  }, [productId])

  if (!productData) {
    return <p>loading...</p>
  }

  return (
    <>
      <Box padding={1.3} paddingMd={2.6} marginHorizontalLgDown={2}>
        <ProductSummary
          customerReviews={3}
          title={productData.title}
          rating={productData.rating}
          price={productData.price}
          description={productData.description}
        />
        <Tabs
          dataReview={productData.reviews}
          shopAttributes={productData.shopAttributes}
          description={productData.description}
        />
        <RecomendedProducts productIds={productData.relatedProducts} />
      </Box>
    </>
  )
}

export { ProductPage }
