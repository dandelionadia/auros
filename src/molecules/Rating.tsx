import React from 'react'
import { FaStar } from 'react-icons/fa'

interface RatingProps {
  stars: number
}

export const Rating: React.FC<RatingProps> = ({ stars }) => {
  const allStars: JSX.Element[] = []

  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      allStars.push(<FaStar fill="#ffb14b" />)
    } else {
      allStars.push(<FaStar fill="#D9D9D9" />)
    }
  }

  return <>{allStars}</>
}
