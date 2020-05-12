import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { Composition, Box } from 'atomic-layout'
import { ProductItem } from '../../molecules/ProductItem'
import { ContainerVertical } from '../../atoms/ContainerVertical'
import { Grid } from '../../atoms/Grid'

export const HomePage: React.FC<RouteComponentProps> = () => {
  const [homeData, setHomeData] = useState<any[]>()

  useEffect(() => {
    fetch(`https://auros-api.netlify.app/.netlify/functions/api/products`)
      .then((res) => res.json())
      .then((res) => setHomeData(res))
  }, [])

  if (!homeData) {
    return <p>loading...</p>
  }

  return (
    <Grid fluid>
      <ContainerVertical>
        <Composition
          alignItems="flex-start"
          templateCols="1fr"
          templateColsSm="repeat(2, 1fr)"
          templateColsMd="repeat(3, 1fr)"
          templateColsLg="repeat(4, 1fr)"
          templateColsXl="repeat(auto-fit, minmax(80px, 1fr))"
          gap={3}
        >
          {homeData.map((item) => (
            <ProductItem
              images={item.images}
              price={item.price}
              name={item.title}
              buttonText="add to cart"
              id={item.id}
            />
          ))}
        </Composition>
      </ContainerVertical>
    </Grid>
  )
}
