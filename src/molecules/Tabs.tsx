import React from 'react'
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from 'atomic-layout'
import { ProductTable } from '../pages/product/ProductTable'
import { ProductReviews } from '../pages/product/ProductReviews'
import { ProductReview, ProductAttributes } from '../pages/product/ProductPage'
import { Grid } from './Grid'

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

interface TabsPros {
  dataReview: ProductReview[]
  shopAttributes: ProductAttributes[]
  description: string
}

const Tabs: React.FC<TabsPros> = ({
  dataReview,
  shopAttributes,
  description
}) => {
  const match = useRouteMatch()

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
            <Grid>
              <p>{description}</p>
            </Grid>
          )}
        />
        <Route
          path={`${match.url}/info`}
          render={() => (
            <Grid>
              <ProductTable data={shopAttributes} />
            </Grid>
          )}
        />
        <Route
          path={`${match.url}/review`}
          render={() => (
            <Grid>
              <ProductReviews reviews={dataReview} />
            </Grid>
          )}
        />
      </Switch>
    </Box>
  )
}

export { Tabs }
