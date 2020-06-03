import React from 'react'
import { TitleBar } from '../components/TitleBar'
import { Grid } from '../../atoms/Grid'
import { ContainerVertical } from '../../atoms/ContainerVertical'

export const ContactPage: React.FC = () => {
  return (
    <>
      <TitleBar titlePage="Contact Us" />
      <Grid fluid>
        <ContainerVertical>
          <p>content</p>
        </ContainerVertical>
      </Grid>
    </>
  )
}
