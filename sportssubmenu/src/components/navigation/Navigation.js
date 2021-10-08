import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Arizona from '../nflteams/Arizona'
import Atlanta from '../nbateams/Atlanta'

const Navigation = () => {
  return (
    <div className='navigation'>
      <Router>
        <Switch>
          <Route exact path='/nflteams/Arizona' component={Arizona} />
          <Route path='/nbateams/Atlanta' component={Atlanta} />
        </Switch>
      </Router>
    </div>
  )
}

export default Navigation
