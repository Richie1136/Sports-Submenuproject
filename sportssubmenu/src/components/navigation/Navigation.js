import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ArizonaCards from '../nflteams/Arizonacards'
import AtlantaHawks from '../nbateams/Atlantahawks'
import Arizona from '../mlbteams/Arizona'
import Atlanta from '../mlbteams/Atlanta'
import Baltimore from '../mlbteams/Baltimore'
import Boston from '../mlbteams/Boston'
import Cubs from '../mlbteams/Cubs'
import WhiteSox from '../mlbteams/Whitesox'
import Cincinnati from '../mlbteams/Cincinnati'
import Cleveland from '../mlbteams/Cleveland'
import Colorado from '../mlbteams/Colorado'
import Detroit from '../mlbteams/Detroit'
import Houston from '../mlbteams/Houston'
import KansasCity from '../mlbteams/Kansascity'
import Angels from '../mlbteams/Angles'
import Dodgers from '../mlbteams/Dodgers'
import Miami from '../mlbteams/Miami'
import Milwaukee from '../mlbteams/Milwaukee'
import Minnesota from '../mlbteams/Minnesota'
import Mets from '../mlbteams/Mets'
import Yankees from '../mlbteams/Yankees'
import Oakland from '../mlbteams/Oakland'
import Philadelphia from '../mlbteams/Philadelphia'
import Pittsburgh from '../mlbteams/Pittsburgh'
import Sandiego from '../mlbteams/Sandiego'
import Sanfrancisco from '../mlbteams/Sanfrancisco'
import Seattle from '../mlbteams/Seattle'
import StLouis from '../mlbteams/Stlouis'
import TampaBay from '../mlbteams/Tampabay'
import Texas from '../mlbteams/Texas'
import Toronto from '../mlbteams/Toronto'
import Washington from '../mlbteams/Washington'
import MLB from '../mlbteams/Mlb'

const Navigation = () => {
  return (
    <div className='navigation'>
      <Router>
        <Switch>
          <Route exact path='/nflteams/ArizonaCards' component={ArizonaCards} />
          <Route path='/nbateams/Atlanta' component={Atlanta} />
        </Switch>
      </Router>
    </div>
  )
}

export default Navigation
