import React from 'react'
import { Label } from '../atoms/Label'

interface PropsContact {
  title: string
  content: string
}

export const Contact: React.FC<PropsContact> = ({ title, content }) => {
  return (
    <>
      <Label as="span">{title}:</Label>
      <span>{content}</span>
    </>
  )
}
