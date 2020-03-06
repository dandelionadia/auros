import React from 'react'
import { ProductData } from '../pages/product/ProductPage'

interface DescriptionProps {
  dataDescription: ProductData['description']
}

export const Description: React.FC<DescriptionProps> = ({
  dataDescription
}) => {
  return (
    <div>
      <p>{dataDescription}</p>
    </div>
  )
}
