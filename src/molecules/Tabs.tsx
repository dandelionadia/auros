import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

const Tabs: React.FC = () => {
  return (
    <div>
      <Link to="/product/">description.</Link>
      <Link to="/product/info">info.</Link>
      <Link to="/product/review">review.</Link>
      <Switch>
        <Route path="/product/" exact render={() => <p>I'm description</p>} />
        <Route path="/product/info" render={() => <p>I'm info</p>} />
        <Route path="/product/review" render={() => <p>I'm review</p>} />
      </Switch>
    </div>
  )
}

export { Tabs }
