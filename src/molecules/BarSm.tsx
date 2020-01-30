import React from 'react'
import { Composition } from 'atomic-layout'
import { IoIosSearch, IoMdPerson, IoMdCart } from 'react-icons/io'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #262626;
`

const templateSm = `
	myAccount search card
`

export const BarSm: React.FC = () => {
  return (
    <Composition
      template={templateSm}
      as={Container}
      padding="10px"
      justifyContent="space-around"
    >
      {Areas => (
        <>
          <Areas.MyAccount>
            <a href="#">
              <IoIosSearch size="35" color="#f3f3f3" />
            </a>
          </Areas.MyAccount>
          <Areas.Search>
            <a href="#">
              <IoMdPerson size="35" color="#f3f3f3" />
            </a>
          </Areas.Search>
          <Areas.Card>
            <a href="#">
              <IoMdCart size="35" color="#f3f3f3" />
            </a>
          </Areas.Card>
        </>
      )}
    </Composition>
  )
}
