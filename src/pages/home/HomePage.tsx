import React, { useState, useEffect } from 'react'
import { Composition } from 'atomic-layout'
import { RouteComponentProps } from 'react-router'
import { ProductItem } from '../../molecules/ProductItem'
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
    <Grid>
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
            image="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-28-600x675.jpg"
            secondImage="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-28-600x675.jpg"
            price={item.price}
            name={item.title}
            buttonText="add to cart"
            id={item.id}
          />
        ))}
      </Composition>
    </Grid>
  )
}
