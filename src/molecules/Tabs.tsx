import React from 'react'
import { NavLink, Switch, withRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import Layout, { Box } from 'atomic-layout'
import { Table } from './Table'
import { ProductReviews } from '../pages/product/ProductReviews'

const dataInfo = [
  {
    title: 'Foo 1',
    data: 'Lorem'
  },
  {
    title: ' Foo 2',
    data: 'Lorem lorem'
  },
  {
    title: ' Foo 3 Lorem Lorem Lorem',
    data: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem'
  },
  {
    title: 'Foo 1',
    data: 'Lorem'
  },
  {
    title: ' Foo 2',
    data: 'Lorem lorem'
  },
  {
    title: ' Foo 3',
    data: 'Lorem Lorem Lorem'
  }
]

const dataReviews = [
  {
    name: 'Duck Lord',
    data: '22.03.1990',
    reviewText:
      'I am info Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Cat Lord',
    data: '22.03.1992',
    reviewText:
      'I am info Lorem ipsum, dolor sit amet consectetur adipisicing elit'
  },
  {
    name: 'Dog Lord',
    data: '22.03.1994',
    reviewText:
      'I am info Lorem ipsum, dolor sit amet consectetur adipisicing elit'
  }
]

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.greyLight};
  padding: 0.5rem 0;
  font-size: 22px;
  font-weight: 600;

  ::after {
    content: '';
    display: block;
    width: 0;
    height: 2.5px;
    background-color: ${({ theme }) => theme.colors.orange};
    transition: width ease 0.35s;
  }

  &.active {
    color: ${({ theme }) => theme.colors.blackLight};
  }

  :hover,
  &.active {
    ::after {
      width: 100%;
    }
  }
`

const StyldUl = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 55px;
  text-align: center;
`

const StyledLI = styled.li`
  display: inline-block;

  :not(:last-child) {
    margin-right: 45px;
  }
`

const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.greyLight};
  margin: 0 20px;
  line-height: 28px;

  @media (min-width: ${Layout.breakpoints.lg.minWidth}) {
    margin-left: 120px;
    margin-right: 120px;
  }
`

const StyledTable = styled.table`
  background-color: #dedfe0;
  border: 1px solid #eee;
  width: 100%;
`

const Tabs = withRouter(({ match }) => {
  return (
    <Box marginBottom={3}>
      <StyldUl>
        <StyledLI>
          <StyledLink exact to={match.url}>
            Description
          </StyledLink>
        </StyledLI>
        <StyledLI>
          <StyledLink to={`${match.url}/info`}>Info</StyledLink>
        </StyledLI>
        <StyledLI>
          <StyledLink to={`${match.url}/review`}>Review</StyledLink>
        </StyledLI>
      </StyldUl>
      <Switch>
        <Route
          path={match.url}
          exact
          render={() => (
            <StyledP>
              I'm description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quo sapiente tenetur cum, quis, quia veniam quod fugit
              eligendi cupiditate vero, sequi asperiores cumque eos ipsum
              pariatur alias dolore saepe unde. I'm description Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quo sapiente tenetur
              cum, quis, quia veniam quod fugit eligendi cupiditate vero, sequi
              asperiores cumque eos ipsum pariatur alias dolore saepe unde.
            </StyledP>
          )}
        />
        <Route
          path={`${match.url}/info`}
          render={() => (
            <StyledP>
              <StyledTable>
                {dataInfo.map(item => (
                  <Table title={item.title} data={item.data} />
                ))}
              </StyledTable>
            </StyledP>
          )}
        />
        <Route
          path={`${match.url}/review`}
          render={() => (
            <StyledP>
              <ProductReviews reviews={dataReviews} />
            </StyledP>
          )}
        />
      </Switch>
    </Box>
  )
})

export { Tabs }
