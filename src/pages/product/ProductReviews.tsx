import React from 'react'
import { Review } from '../../molecules/Review'

interface ProductReviewsProps {
  reviews: any[]
}

export const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <div>
      {reviews.map(review => (
        <Review
          name={review.name}
          data={review.data}
          reviewText={review.reviewText}
        />
      ))}
    </div>
  )
}
