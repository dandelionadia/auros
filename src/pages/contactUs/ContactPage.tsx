import React from 'react'
import { Composition } from 'atomic-layout'

import { TitleBar } from '../components/TitleBar'
import { Grid } from '../../atoms/Grid'
import { ContainerVertical } from '../../atoms/ContainerVertical'
import { TitleBlock } from './components/TitleBlock'

const templateMobile = `
  titleInfo
  contactInfo
  titleForm
  contactForm
`

const templateTablet = `
  titleInfo contactInfo
  titleForm contactForm
  / auto 1fr
`

export const ContactPage: React.FC = () => {
  return (
    <>
      <TitleBar titlePage="Contact Us" />
      <Grid fluid>
        <ContainerVertical>
          <Composition
            template={templateMobile}
            templateMd={templateTablet}
            gap={2}
            gapMd={5}
            gapLg={10}
          >
            {(Areas) => (
              <>
                <Areas.TitleInfo>
                  <TitleBlock title="Infomation" />
                </Areas.TitleInfo>
                <Areas.ContactInfo>info</Areas.ContactInfo>
                <Areas.TitleForm>
                  <TitleBlock title="Drop us a line" />
                </Areas.TitleForm>
                <Areas.ContactForm>form</Areas.ContactForm>
              </>
            )}
          </Composition>
        </ContainerVertical>
      </Grid>
    </>
  )
}
