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
      {data.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          image={item.images[0]}
          secondImage={item.images[1]}
          price={item.price}
          name={item.title}
          buttonText="add to cart"
        />
      ))}
    </Composition>
  )
}
