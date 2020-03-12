import React, { useState, useEffect } from 'react'
import { Composition } from 'atomic-layout'
import { RouteComponentProps } from 'react-router'
import { ProductItem } from '../../molecules/ProductItem'

export const HomePage: React.FC<RouteComponentProps> = () => {
  const [homeData, setHomeData] = useState<any[]>()

  useEffect(() => {
    fetch(`https://auros-api.netlify.com/.netlify/functions/api/products`)
      .then(res => res.json())
      .then(res => setHomeData(res))
  }, [])

  if (!homeData) {
    return <p>loading...</p>
  }

  return (
    <>
      <Composition
        alignItems="center"
        templateCols="1fr"
        templateColsMd="repeat(2, 1fr)"
        templateColsLg="repeat(auto-fit, minmax(80px, 1fr))"
      >
        {homeData.map(item => (
          <ProductItem
            image="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-28-600x675.jpg"
            secondImage="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/2-28-600x675.jpg"
            price={item.price}
            name={item.title}
            buttonText="add to cart"
          />
        ))}
      </Composition>
    </>
  )
}
