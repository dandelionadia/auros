import React from 'react'

interface LoadIngIconProps {
  className?: string
}

export const LoadingIcon: React.FC<LoadIngIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="41"
      viewBox="0 0 40 40"
    >
      <circle
        r="10"
        cx="50%"
        cy="50%"
        stroke="#fff"
        stroke-width="3"
        fill="none"
      />
    </svg>
  )
}
