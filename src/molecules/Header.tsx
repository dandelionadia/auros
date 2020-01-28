import React from 'react'
import { Composition, Only, Box } from 'atomic-layout'
import styled from 'styled-components'
import { Burger } from '../atoms/Burger'
import { NavMenu } from './NavMenu'
import { Logo } from '../atoms/Logo'
import { Bar } from './Bar'
import { BarSm } from './BarSm'

const ContainerHeader = styled.div`
  position: relative;
  z-index: 2;
`

const StyledBarSm = styled.div`
  width: 100%;
  position: fixed;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.09);
  bottom: 0;
  left: 0;
`

const templateMobile = `
	logo burger
	bar bar
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
      marginHorizontal="20px"
      marginHorizontalMd="40px"
      marginVertical="20px"
      marginVerticalLg="40px"
      alignItems="center"
    >
      {Areas => (
        <>
          <Areas.Logo justifyMdOnly="center">
            <a href="#">
              <Logo src="https://demo2.wpopal.com/auros/wp-content/uploads/2019/02/Logo.svg" />
            </a>
          </Areas.Logo>
          <Areas.Burger>
            <Burger />
          </Areas.Burger>
          <Areas.Menu justifyLg="center">
            <NavMenu
              data={[
                {
                  name: 'Home',
                  subMenu: [
                    {
                      name: 'lorem lorem'
                    },
                    {
                      name: 'lorem'
                    }
                  ]
                },
                {
                  name: 'Shop',
                  subMenu: [
                    {
                      name: 'fooo'
                    },
                    {
                      name: 'foo'
                    }
                  ]
                },
                {
                  name: 'Shop',
                  subMenu: [
                    {
                      name: ' lorem 3'
                    },
                    {
                      name: 'lorem 4'
                    }
                  ]
                },
                {
                  name: 'Shop',
                  subMenu: [
                    {
                      name: 'lorem lorem'
                    },
                    {
                      name: ' lorem 4'
                    }
                  ]
                }
              ]}
            />
          </Areas.Menu>
          <Areas.Bar>
            <Only from="md">
              <Bar />
            </Only>
            <Only to="md">
              <Box as={StyledBarSm}>
                <BarSm />
              </Box>
            </Only>
          </Areas.Bar>
        </>
      )}
    </Composition>
  )
}
