import React from 'react'
import styled from 'styled-components'

const StyledTr = styled.tr`
  background-color: #e8eaed;
  text-align: left;

  :nth-child(2n) {
    background-color: #f5f6fa;
  }
`

const StyledTh = styled.th`
  color: ${({ theme }) => theme.colors.blackLight};
  padding: 10px 20px;
  font-weight: 400;
`

const StyledTd = styled.td`
  color: #7d8794;
  padding: 10px 20px;
`

interface TableProps {
  rows: any
}

export const Table: React.FC<TableProps> = ({ rows }) => {
  return (
    <StyledTr>
      <StyledTh>{rows.title}</StyledTh>
      <StyledTd>{rows.data}</StyledTd>
    </StyledTr>
  )
}
