import React from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { Text } from '../atoms/Text'

const StyledContainerProduct = styled.div``
const StyledProductDescription = styled.div`
  text-align: center;
  padding: 25px 0;
`
const StyledContainerImage = styled.div`
  max-width: 500px;
  height: auto;
`
const StyledProductImage = styled.img``

const Product: React.FC = () => {
  return (
    <Box as={StyledContainerProduct} margin="0 20px 30px 20px">
      <Box as={StyledContainerImage}>
        <a href="#">
          <Box
            as={StyledProductImage}
            src="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-22-620x698.jpg"
            alt="img"
          />
        </a>
      </Box>
      <Box as={StyledProductDescription}>
        <Text big>Mega Table Lamp</Text>
        <p>$166.26</p>
      </Box>
    </Box>
  )
}

export { Product }
