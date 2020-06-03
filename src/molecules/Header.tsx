import React from 'react'
import { Link } from 'react-router-dom'
import { Composition } from 'atomic-layout'
import styled from 'styled-components'
import { Burger } from '../atoms/Burger'
import { NavMenu } from './NavMenu'
import { Logo } from '../atoms/Logo'
import { Bar } from './Bar'
import routes from '../routes'

const ContainerHeader = styled.div`
  position: relative;
  z-index: 2;
  line-height: normal;
`

const templateMobile = `
	logo burger
`

const templateDesktop = `
	logo logo
  menu bar
  / 1fr auto
`

const templateLg = `
  logo menu bar
  / 130px 1fr auto
`

export const Header: React.FC = () => {
  return (
    <Composition
      as={ContainerHeader}
      template={templateMobile}
      templateMd={templateDesktop}
      templateLg={templateLg}
      gap={0.5}
      paddingHorizontal="20px"
      paddingHorizontalMd="40px"
      paddingVertical="20px"
      paddingVerticalLg="40px"
      alignItems="center"
    >
      {(Areas) => (
        <>
          <Areas.Logo justifyMdOnly="center">
            <Link to={routes.home}>
              <Logo src="https://demo2.wpopal.com/auros/wp-content/uploads/2019/02/Logo.svg" />
            </Link>
          </Areas.Logo>
          <Areas.Burger justify="flex-end">
            <Burger />
          </Areas.Burger>
          <Areas.Menu justifyLg="center">
            <NavMenu
              data={[
                {
                  name: 'Home',
                  url: routes.home,
                },
                {
                  name: 'Shop',
                  subMenu: [
                    {
                      name: 'fooo',
                      url: '#',
                    },
                    {
                      name: 'foo',
                      url: '#',
                    },
                  ],
                },
                {
                  name: 'Shop',
                  subMenu: [
                    {
                      name: ' lorem 3',
                      url: '#',
                    },
                    {
                      name: 'lorem 4',
                      url: '#',
                    },
                  ],
                },
                {
                  name: 'Shop',
                  subMenu: [
                    {
                      name: 'lorem lorem',
                      url: '#',
                    },
                    {
                      name: ' lorem 4',
                      url: '#',
                    },
                  ],
                },
                {
                  name: 'Contact',
                  url: routes.contact,
                },
              ]}
            />
          </Areas.Menu>
          <Areas.Bar>
            <Bar />
          </Areas.Bar>
        </>
      )}
    </Composition>
  )
}
