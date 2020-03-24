import React from 'react'
import styled from 'styled-components'
import { Table } from '../../molecules/Table'

const StyledTable = styled.table`
  background-color: #dedfe0;
  border: 1px solid #eee;
  width: 100%;
`

interface PropsProductTable {
  data: any[]
}

export const ProductTable: React.FC<PropsProductTable> = ({ data }) => {
  return (
    <>
      <StyledTable>
        {data.map(item => (
          <Table rows={item} />
        ))}
      </StyledTable>
    </>
  )
}
