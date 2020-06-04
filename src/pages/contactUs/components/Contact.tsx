import React from 'react'
import { Composition } from 'atomic-layout'
import { Heading } from '../../../atoms/Heading'

interface PropsContact {
  title: string
  content: string
}

export const Contact: React.FC<PropsContact> = ({ title, content }) => {
  return (
    <>
      <Heading as="h4">{title}</Heading>
      <span>{content}</span>
    </>
  )
}
