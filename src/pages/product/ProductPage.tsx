import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Box } from 'atomic-layout'
import { RecomendedProducts } from '../../molecules/RecomendedProducts'
import { Tabs } from '../../molecules/Tabs'
import { ProductSummary } from '../components/ProductSummary'
import { useQuery } from '../../hooks/useQuery'

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
  const productId = match.params.productId

  const { loading, data } = useQuery<ProductData>(`/product/${productId}`)

  if (loading) {
    return <p>Product is loading...</p>
  }

  if (!data) {
    return <p>Error when fetching product</p>
  }

  return (
    <>
      <Box padding={1.3} paddingMd={2.6} marginHorizontalLgDown={2}>
        <ProductSummary
          customerReviews={3}
          title={data.title}
          rating={data.rating}
          price={data.price}
          description={data.description}
        />
        <Tabs
          dataReview={data.reviews}
          shopAttributes={data.shopAttributes}
          description={data.description}
        />
        <RecomendedProducts productIds={data.relatedProducts} />
      </Box>
    </>
  )
}

export { ProductPage }
