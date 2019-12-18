import React from 'react'
import { NavLink, Switch, withRouter, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Box } from 'atomic-layout'

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
            <p>
              I'm description Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quo sapiente tenetur cum, quis, quia veniam quod fugit
              eligendi cupiditate vero, sequi asperiores cumque eos ipsum
              pariatur alias dolore saepe unde.
            </p>
          )}
        />
        <Route
          path={`${match.url}/info`}
          render={() => (
            <p>
              I'm info Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore dolorum similique officia ipsa magni, expedita
              consequuntur pariatur perferendis ipsam at reprehenderit,
              voluptate id, debitis amet facilis voluptatibus qui illo commodi.{' '}
            </p>
          )}
        />
        <Route
          path={`${match.url}/review`}
          render={() => (
            <p>
              I'm review Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quia inventore accusamus in suscipit minus praesentium
              voluptate laboriosam exercitationem fugiat, perferendis illum. Et
              ad dolore beatae consequuntur soluta animi amet ullam.
            </p>
          )}
        />
      </Switch>
    </Box>
  )
})

export { Tabs }
