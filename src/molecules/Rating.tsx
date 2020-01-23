import React from 'react'
import { FaStar } from 'react-icons/fa'

interface RatingProps {
  stars: number
}

export const Rating: React.FC<RatingProps> = ({ stars }) => {
  const allStars: JSX.Element[] = []

  for (let i = 0; i < 5; i++) {
    const fillColor = i < stars ? '#ffb14b' : '#D9D9D9'
    allStars.push(<FaStar fill={fillColor} />)
  }

  return <>{allStars}</>
}
