import React from 'react'
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
      alignItems="flex-start"
      templateCols="1fr"
      templateColsSm="repeat(2, 1fr)"
      templateColsMd="repeat(4, 1fr)"
      gap={2}
      gapMd={3}
      paddingVerticalLg={4}
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
