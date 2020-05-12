import React from 'react'

interface SuccessIconProps {
  className?: string
}

export const SuccessIcon: React.FC<SuccessIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
    >
      <g fill="none">
        <path
          d=" M 13 24
                  c 0 0, 0 0, 8 8
                  c 0 0, 0 0, 17 -17
                  "
          stroke="#fff"
          stroke-width="3"
        ></path>
      </g>
    </svg>
  )
}
