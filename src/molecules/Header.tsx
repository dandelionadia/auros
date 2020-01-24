import React from 'react'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import { Burger } from '../atoms/Burger'
import { NavMenu } from './NavMenu'

const ContainerHeader = styled.div`
  position: relative;
  z-index: 2;
`

const templateMobile = `
	logo burger
	bar bar
`

const templateDesktop = `
	logo logo
	menu bar
`

const templateLg = `
	logo menu bar
`

export const Header: React.FC = () => {
  return (
    <Composition
      as={ContainerHeader}
      template={templateMobile}
      templateMd={templateDesktop}
      templateLg={templateLg}
      gap={0.5}
      marginHorizontal="20px"
      marginHorizontalMd="40px"
      marginVertical="20px"
      marginVerticalLg="40px"
    >
      {Areas => (
        <>
          <Areas.Logo>
            <p>logo</p>
          </Areas.Logo>
          <Areas.Burger>
            <Burger />
          </Areas.Burger>
          <Areas.Menu>
            <NavMenu
              data={[
                {
                  name: 'home',
                  subMenu: [
                    {
                      name: '1'
                    },
                    {
                      name: '2'
                    }
                  ]
                },
                {
                  name: 'shop',
                  subMenu: [
                    {
                      name: '3'
                    },
                    {
                      name: '4'
                    }
                  ]
                },
                {
                  name: 'shop',
                  subMenu: [
                    {
                      name: '3'
                    },
                    {
                      name: '4'
                    }
                  ]
                },
                {
                  name: 'shop',
                  subMenu: [
                    {
                      name: '3'
                    },
                    {
                      name: '4'
                    }
                  ]
                }
              ]}
            />
          </Areas.Menu>
          <Areas.Bar>
            <p>bar</p>
          </Areas.Bar>
        </>
      )}
    </Composition>
  )
}
