import React from 'react'
import styled from 'styled-components'

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.greyLight};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
`
const Title = styled.div`
  color: ${({ theme }) => theme.colors.blackLight};
  font-size: 26px;
  font-weight: 600;
  padding-top: 5px;
  text-transform: uppercase;
`

interface PropsTitleBlock {
  title: string
}

export const TitleBlock: React.FC<PropsTitleBlock> = ({ title }) => {
  return (
    <>
      <SubTitle>contact</SubTitle>
      <Title>{title}</Title>
    </>
  )
}
