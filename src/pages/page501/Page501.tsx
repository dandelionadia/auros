import React from 'react'
import styled from 'styled-components'
import { Box } from 'atomic-layout'

import catPictureUrl from '../../images/cat_svg.svg'
import { Heading } from '../../atoms/Heading'
import { ContainerVertical } from '../../atoms/ContainerVertical'
import { Grid } from '../../atoms/Grid'

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`

const Image = styled.img`
  max-width: 600px;
  height: auto;
`

export const Page501: React.FC = () => {
  return (
    <ContainerVertical>
      <Grid>
        <Box
          as={Container}
          flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          paddingBottom={4}
        >
          <Heading>Oops, not ready!</Heading>
          <Image src={catPictureUrl} alt="Cat eating his food" />
        </Box>
      </Grid>
    </ContainerVertical>
  )
}
