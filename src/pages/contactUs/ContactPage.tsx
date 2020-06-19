import React from 'react'
import { Composition } from 'atomic-layout'

import { TitleBar } from '../components/TitleBar'
import { Grid } from '../../atoms/Grid'
import { ContainerVertical } from '../../atoms/ContainerVertical'
import { TitleBlock } from './components/TitleBlock'
import { Contact } from './components/Contact'
import { Form } from './components/Form'

const data = [
  {
    id: Date.now(),
    title: 'Address',
    content: '2593 Timbercrest Road, Chisana, Alaska Badalas United State',
  },
  {
    id: Date.now(),
    title: 'Phone',
    content: '(+91)7-723-4608',
  },
  {
    id: Date.now(),
    title: 'Mail',
    content: 'Aurosfurniture@domain.vn',
  },
]

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
      <TitleBar title="Contact Us" />
      <Grid fluid>
        <ContainerVertical>
          <Composition
            template={templateMobile}
            templateMd={templateTablet}
            gap={1}
            gapMd={4}
            marginVerticalLg={2}
          >
            {(Areas) => (
              <>
                <Areas.TitleInfo>
                  <TitleBlock title="Infomation" />
                </Areas.TitleInfo>
                <Areas.ContactInfo marginBottom={2}>
                  <Composition
                    templateCols="auto 1fr"
                    gapRow={0.5}
                    gapCol={3}
                    alignItems="start"
                    marginLeftSmDown="20px"
                  >
                    {data.map((item) => (
                      <Contact
                        key={item.id}
                        title={item.title}
                        content={item.content}
                      />
                    ))}
                  </Composition>
                </Areas.ContactInfo>
                <Areas.TitleForm>
                  <TitleBlock title="Drop us a line" />
                </Areas.TitleForm>
                <Areas.ContactForm marginBottom={2}>
                  <Form />
                </Areas.ContactForm>
              </>
            )}
          </Composition>
        </ContainerVertical>
      </Grid>
    </>
  )
}
