import React from 'react'
import { Box, Composition } from 'atomic-layout'
import styled from 'styled-components'

const templateMobile = `
	contacts
	products
	links
	newsletter
	legal
`

const templateMd = `
	contacts products links
	newsletter newsletter newsletter
	legal legal legal
`
const templateDesktop = `
contacts products links newsletter
legal legal legal legal
`

const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.greyDim};
  color: ${({ theme }) => theme.colors.greyLight};
  margin: 0;
`

const StyledContainerCopyright = styled.div`
  border-top: 1px solid red;
`

export const Footer: React.FC = () => {
  return (
    <Composition
      template={templateMobile}
      templateMd={templateMd}
      templatelg={templateDesktop}
      paddingHorizontal="20px"
      paddingHorizontalMd="40px"
      paddingTop="60px"
      paddingTopMd="100px"
      paddingBottom="35px"
      as={StyledFooter}
      gap={2}
    >
      {Areas => (
        <>
          <Areas.Contacts>
            <p>contacts</p>
          </Areas.Contacts>
          <Areas.Products>
            <p>Products</p>
          </Areas.Products>
          <Areas.Links>
            <p>Links</p>
          </Areas.Links>
          <Areas.Newsletter>
            <p>Newsletter</p>
          </Areas.Newsletter>
          <Areas.Legal>
            <p>legal</p>
          </Areas.Legal>
        </>
      )}
    </Composition>
  )
}
