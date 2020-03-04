import React from 'react'
import { Review } from '../../molecules/Review'
import { ProductReview } from './ProductPage'

interface ProductReviewsProps {
  reviews: ProductReview[]
}

export const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  return (
    <div>
      {reviews.map(review => (
        <Review
          name={review.name}
          date={review.date}
          rating={review.rating}
          text={review.text}
        />
      ))}
    </div>
  )
}
