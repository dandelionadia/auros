import React from 'react'
import { Composition } from 'atomic-layout'

const areasMobile = `
	gallery
	summary
`

const areasDesktop = `
	gallery summary
`

const ProductSummary: React.FC = () => {
  return (
    <Composition areas={areasMobile} areasMd={areasDesktop}>
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
