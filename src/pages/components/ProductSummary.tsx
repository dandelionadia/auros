import React from 'react'
import { Composition } from 'atomic-layout'

const templateMobile = `
	gallery
	summary
	1fr 
`

const templateDesktop = `
	gallery summary
	/ 1fr 1fr
`

const ProductSummary: React.FC = () => {
  return (
    <Composition template={templateMobile} templateMd={templateDesktop}>
      {({ Gallery, Summary }) => (
        <>
          <Gallery>
            <p>gallaty</p>
          </Gallery>
          <Summary>
            <p>summary</p>
          </Summary>
        </>
      )}
    </Composition>
  )
}

export { ProductSummary }
