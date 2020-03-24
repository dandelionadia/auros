import React, { useState, useEffect } from 'react'
import { Composition } from 'atomic-layout'
import { ProductItem } from './ProductItem'
import { ProductData } from '../pages/product/ProductPage'
import { useQuery } from '../hooks/useQuery'

export const RecomendedProducts: React.FC<{
  productIds: string[]
}> = ({ productIds }) => {
  const { loading, data } = useQuery<ProductData[]>(
    `/products?id=${productIds.join()}`
  )

  if (loading) {
    return <p>Products is loading...</p>
  }

  if (!data) {
    return <p>Error when fetching product</p>
  }

  return (
    <Composition
      alignItems="center"
      templateCols="1fr"
      templateColsMd="repeat(2, 1fr)"
      templateColsLg="repeat(auto-fit, minmax(80px, 1fr))"
    >
      {data.map(item => (
        <ProductItem
          id={item.id}
          image="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-28-600x675.jpg"
          secondImage="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-28-600x675.jpg"
          price={item.price}
          name={item.title}
          buttonText="add to cart"
        />
      ))}
    </Composition>
  )
}