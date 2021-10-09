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
import Angels from '../mlbteams/Angels'
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
import Brooklyn from '../nbateams/Brooklyn'
import Boston from '../nbateams/Boston'
import Charlotte from '../nbateams/Charlotte',
import Chicago from '../nbateams/Chicago'
import Cleveland from '../nbateams/Cleveland'
import Dallas from '../nbateams/Dallas'
import Denver from '../nbateams/Denver'
import Detroit from '../nbateams/Detroit'
import GoldenState from '../nbateams/Goldenstate'
import Houston from '../nbateams/Houston'
import Indiana from '../nbateams/Indiana'
import Clippers from '../nbateams/Clippers'
import Lakers from '../nbateams/Lakers'
import Memphis from '../nbateams/Memphis'
import Miami from '../nbateams/Miami'
import Milwaukee from '../nbateams/Milwaukee'
import Minnesota from '../nbateams/Minnesota'
import NewOrleans from '../nbateams/Neworleans'
import NewYork from '../nbateams/Newyork'
import OklahomaCity from '../nbateams/Oklahomacity'
import Orlando from '../nbateams/Orlando'
import Philadelphia from '../nbateams/Philadelphia'
import Phoenix from '../nbateams/Phoenix'
import Portland from '../nbateams/Portland'
import Sacramento from '../nbateams/Sacramento'
import SanAntonio from '../nbateams/Sanantonio'
import Toronto from '../nbateams/Toronto'
import Utah from '../nbateams/Utah'
import Washington from '../nbateams/Washington'

const Navigation = () => {
  return (
    <div className='navigation'>
      <Router>
        <Switch>
          <Route exact path='/nflteams/ArizonaCards' component={ArizonaCards} />
          <Route path='/mlbteams/Arizona' component={Arizona} />
          <Route path='/mlbteams/Atlanta' component={Atlanta} />
          <Route path='/mlbteams/Baltimore' component={Baltimore} />
          <Route path='/mlbteams/Boston' component={Boston} />
          <Route path='/mlbteams/Cubs' component={Cubs} />
          <Route path='/mlbteams/Whitesox' component={WhiteSox} />
          <Route path='/mlbteams/Cincinnati' component={Cincinnati} />
          <Route path='/mlbteams/Cleveland' component={Cleveland} />
          <Route path='/mlbteams/Colorado' component={Colorado} />
          <Route path='/mlbteams/Detroit' component={Detroit} />
          <Route path='/mlbteams/Houston' component={Houston} />
          <Route path='/mlbteams/Kansascity' component={KansasCity} />
          <Route path='/mlbteams/Angels' component={Angels} />
          <Route path='/mlbteams/Dodgers' component={Dodgers} />
          <Route path='/mlbteams/Miami' component={Miami} />
          <Route path='/mlbteams/Milwaukee' component={Milwaukee} />
          <Route path='/mlbteams/Minnesota' component={Minnesota} />
          <Route path='/mlbteams/Mets' component={Mets} />
          <Route path='/mlbteams/Yankees' component={Yankees} />
          <Route path='/mlbteams/Oakland' component={Oakland} />
          <Route path='/mlbteams/Philadelphia' component={Philadelphia} />
          <Route path='/mlbteams/Pittsburgh' component={Pittsburgh} />
          <Route path='/mlbteams/Sandiego' component={Sandiego} />
          <Route path='/mlbteams/Sanfrancisco' component={Sanfrancisco} />
          <Route path='/mlbteams/Seattle' component={Seattle} />
          <Route path='/mlbteams/Stlouis' component={StLouis} />
          <Route path='/mlbteams/Tampabay' component={TampaBay} />
          <Route path='/mlbteams/Texas' component={Texas} />
          <Route path='/mlbteams/Toronto' component={Toronto} />
          <Route path='/mlbteams/Washington' component={Washington} />
          <Route path='/mlbteams/Mlb' component={MLB} />
          <Route path='/nbateams/AtlantaHawks' component={AtlantaHawks} />
          <Route path='/nbateams/Brooklyn' component={Brooklyn} />
          <Route path='/nbateams/Boston' component={Boston} />
          <Route path='/nbateams/Charlotte' component={Charlotte} />
          <Route path='/nbateams/Chicago' component={Chicago} />
          <Route path='/nbateams/Cleveland' component={Cleveland} />
          <Route path='/nbateams/Dallas' component={Dallas} />
          <Route path='/nbateams/Denver' component={Denver} />
          <Route path='/nbateams/Detroit' component={Detroit} />
          <Route path='/nbateams/Goldenstate' component={GoldenState} />
          <Route path='/nbateams/Houston' component={Houston} />
          <Route path='/nbateams/Indiana' component={Indiana} />
          <Route path='/nbateams/Clippers' component={Clippers} />
          <Route path='/nbateams/Lakers' component={Lakers} />
          <Route path='/nbateams/Memphis' component={Memphis} />
          <Route path='/nbateams/Miami' component={Miami} />
          <Route path='/nbateams/Milwaukee' component={Milwaukee} />
          <Route path='/nbateams/Minnesota' component={Minnesota} />
          <Route path='/nbateams/Neworleans' component={NewOrleans} />
          <Route path='/nbateams/Newyork' component={NewYork} />
          <Route path='/nbateams/Oklahomacity' component={OklahomaCity} />
          <Route path='/nbateams/Orlando' component={Orlando} />
          <Route path='/nbateams/Philadelphia' component={Philadelphia} />
          <Route path='/nbateams/Phoenix' component={Phoenix} />
          <Route path='/nbateams/Portland' component={Portland} />
          <Route path='/nbateams/Sacramento' component={Sacramento} />
          <Route path='/nbateams/Sanantonio' component={SanAntonio} />
          <Route path='/nbateams/Toronto' component={Toronto} />
          <Route path='/nbateams/Utah' component={Utah} />
          <Route path='/nbateams/Washington' component={Washington} />
        </Switch>
      </Router>
    </div>
  )
}

export default Navigation