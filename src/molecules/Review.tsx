import React from 'react'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'
import { Heading } from '../atoms/Heading'
import { Rating } from './Rating'

const Container = styled.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`

const StyledData = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.blackLight};
  opacity: 0.5;
`

const StyledReview = styled.p`
  margin: 0;
  line-height: 2;
`

interface ReviewProps {
  name: string
  data: string
  reviewText: string
}

export const Review: React.FC<ReviewProps> = ({ name, data, reviewText }) => {
  return (
    <Composition as={Container} gap={1} paddingVertical="20px">
      <Heading as="h3">{name}</Heading>
      <StyledData>{data}</StyledData>
      <div>
        <Rating stars={5} />
      </div>
      <StyledReview>{reviewText}</StyledReview>
    </Composition>
  )
}
