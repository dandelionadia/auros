import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { RecomendedProducts } from '../../molecules/RecomendedProducts'
import { Tabs } from '../../molecules/Tabs'
import { ProductSummary } from '../components/ProductSummary'
import { useQuery } from '../../hooks/useQuery'
import { Grid } from '../../atoms/Grid'
import { ContainerVertical } from '../../atoms/ContainerVertical'
import { addToCart } from '../../store/reducers/cart/cart.actions'
import { useDispatch } from 'react-redux'
import { AsyncButtonState } from '../../atoms/AsyncButton'

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
  const [asyncButtonState, setAsyncButtonState] = useState<AsyncButtonState>()
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
    setAsyncButtonState('loading')
    dispatch(
      addToCart(productId, data.title, data.price, quantity, data.images[0])
      // @ts-ignore
    ).then(() => {
      setAsyncButtonState('done')
      setTimeout(() => {
        setAsyncButtonState('idle')
      }, 2000)
    })
  }

  return (
    <Grid>
      <ContainerVertical>
        <ProductSummary
          customerReviews={3}
          title={data.title}
          rating={data.rating}
          price={data.price}
          images={data.images}
          description={data.description}
          onAddToCartClick={handleAddToCart}
          state={asyncButtonState}
        />
        <Tabs
          dataReview={data.reviews}
          shopAttributes={data.shopAttributes}
          description={data.description}
        />
        <RecomendedProducts productIds={data.relatedProducts} />
      </ContainerVertical>
    </Grid>
  )
}

export { ProductPage }
