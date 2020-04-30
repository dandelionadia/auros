import React from 'react'
import { RouteComponentProps } from 'react-router'
import { RecomendedProducts } from '../../molecules/RecomendedProducts'
import { Tabs } from '../../molecules/Tabs'
import { ProductSummary } from '../components/ProductSummary'
import { useQuery } from '../../hooks/useQuery'
import { Grid } from '../../atoms/Grid'
import { addToCart } from '../../store/reducers/cart/cart.actions'
import { useDispatch } from 'react-redux'

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
//gets id from the Router and App page and show a page with a product
const ProductPage: React.FC<RouteComponentProps<{
  productId: string
}>> = ({ match }) => {
  const dispatch = useDispatch()

  //match => it is Route word wich not about 'id' in the 'path'
  const { productId } = match.params
  // { loading, data } = useQuery === useQuery.loading, useQuery.data (get state in the useQuery for using it here when: if(!data)... )
  // useQuery<ProductData> === useQuery is using interface <ProductData>
  //useQuery<ProductData>(`/product/${productId}`) === called function with data
  const { loading, data } = useQuery<ProductData>(`/product/${productId}`)

  if (loading) {
    return <p>Product is loading...</p>
  }

  if (!data) {
    return <p>Error when fetching product</p>
  }

  const handleAddToCart = (quantity: number) => {
    dispatch(
      addToCart(productId, data.title, data.price, quantity, data.images[0])
    )
  }

  return (
    <Grid>
      <ProductSummary
        customerReviews={3}
        title={data.title}
        rating={data.rating}
        price={data.price}
        images={data.images}
        description={data.description}
        onAddToCartClick={handleAddToCart}
      />
      <Tabs
        dataReview={data.reviews}
        shopAttributes={data.shopAttributes}
        description={data.description}
      />
      <RecomendedProducts productIds={data.relatedProducts} />
    </Grid>
  )
}

export { ProductPage }
