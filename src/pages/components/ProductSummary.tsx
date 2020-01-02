import React from 'react'
import { Composition } from 'atomic-layout'
import { Image } from '../../atoms/Image'
import { Heading } from '../../atoms/Heading'

const templateMobile = `
	gallery
	summary
`

const templateDesktop = `
	gallery summary
	/ 1fr 1fr
`

const ProductSummary: React.FC = () => {
  return (
    <Composition
      template={templateMobile}
      templateSm={templateDesktop}
      gap={3}
      marginVertical={4}
    >
      {({ Gallery, Summary }) => (
        <>
          <Gallery>
            <Image
              src="https://demo2.wpopal.com/auros/wp-content/uploads/2018/10/1-32.jpg"
              alt="image"
            />
          </Gallery>
          <Summary>
            <Heading>h1</Heading>
            <Heading as="h2">h2</Heading>
          </Summary>
        </>
      )}
    </Composition>
  )
}

export { ProductSummary }
