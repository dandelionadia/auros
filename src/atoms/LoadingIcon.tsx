import React from 'react'

interface LoadIngIconProps {
  className?: string
}

export const LoadingIcon: React.FC<LoadIngIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <circle
        r="15"
        cx="50%"
        cy="50%"
        stroke="#fff"
        stroke-width="2"
        fill="none"
      />
    </svg>
  )
}
