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
import Reds from '../mlbteams/Reds'
import Cleveland from '../mlbteams/Cleveland'
import Colorado from '../mlbteams/Colorado'
import Detroit from '../mlbteams/Detroit'
import Astros from '../mlbteams/Astros'
import KansasCity from '../mlbteams/Kansascity'
import Angels from '../mlbteams/Angels'
import Dodgers from '../mlbteams/Dodgers'
import Miami from '../mlbteams/Miami'
import Brewers from '../mlbteams/Brewers'
import Twins from '../mlbteams/Twins'
import Mets from '../mlbteams/Mets'
import Yankees from '../mlbteams/Yankees'
import Oakland from '../mlbteams/Oakland'
import Philadelphia from '../mlbteams/Philadelphia'
import Pittsburgh from '../mlbteams/Pittsburgh'
import Sandiego from '../mlbteams/Sandiego'
import Sanfrancisco from '../mlbteams/Sanfrancisco'
import Seattle from '../mlbteams/Seattle'
import StLouis from '../mlbteams/Stlouis'
import Rays from '../mlbteams/Rays'
import Texas from '../mlbteams/Texas'
import Toronto from '../mlbteams/Toronto'
import Nationals from '../mlbteams/Nationals'
import MLB from '../mlbteams/Mlb'
import Brooklyn from '../nbateams/Brooklyn'
import Celtics from '../nbateams/Celtics'
import Charlotte from '../nbateams/Charlotte'
import Bulls from '../nbateams/Bulls'
import Cavs from '../nbateams/Cavs'
import Dallas from '../nbateams/Dallas'
import Nuggets from '../nbateams/Nuggets'
import Pistons from '../nbateams/Pistons'
import GoldenState from '../nbateams/Goldenstate'
import Rockets from '../nbateams/Rockets'
import Indiana from '../nbateams/Indiana'
import Clippers from '../nbateams/Clippers'
import Lakers from '../nbateams/Lakers'
import Memphis from '../nbateams/Memphis'
import Heat from '../nbateams/Heat'
import Milwaukee from '../nbateams/Milwaukee'
import Minnesota from '../nbateams/Minnesota'
import NewOrleans from '../nbateams/Neworleans'
import NewYork from '../nbateams/Newyork'
import OklahomaCity from '../nbateams/Oklahomacity'
import Orlando from '../nbateams/Orlando'
import Philadelphia76ers from '../nbateams/Philadelphia76ers'
import Phoenix from '../nbateams/Phoenix'
import Portland from '../nbateams/Portland'
import Sacramento from '../nbateams/Sacramento'
import SanAntonio from '../nbateams/Sanantonio'
import Raptors from '../nbateams/Raptors'
import Utah from '../nbateams/Utah'
import Wizards from '../nbateams/Wizards'
import Falcons from '../nflteams/Falcons'
import Ravens from '../nflteams/Ravens'
import Buffalo from '../nflteams/Buffalo'
import Carolina from '../nflteams/Carolina'
import Bears from '../nflteams/Bears'
import Cincinnati from '../nflteams/Cincinnati'
import Browns from '../nflteams/Browns'
import Cowboys from '../nflteams/Cowboys'
import Denver from '../nflteams/Denver'
import Lions from '../nflteams/Lions'
import GreenBay from '../nflteams/Greenbay'
import Houston from '../nflteams/Houston'
import Indianapolis from '../nflteams/Indianapolis'
import Jacksonville from '../nflteams/Jacksonville'
import Chiefs from '../nflteams/Chiefs'
import Chargers from '../nflteams/Chargers'
import Rams from '../nflteams/Rams'
import LasVegas from '../nflteams/Lasvegas'
import Dolphins from '../nflteams/Dolphins'
import Vikings from '../nflteams/Vikings'
import NewEngland from '../nflteams/Newengland'
import Saints from '../nflteams/Saints'
import Giants from '../nflteams/Giants'
import Jets from '../nflteams/Jets'
import Eagles from '../nflteams/Eagles'
import Steelers from '../nflteams/Steelers'
import Seahawks from '../nflteams/Seahawks'
import SanFrancisco from '../nflteams/Sanfrancisco'
import TampaBay from '../nflteams/Tampabay'
import Tennessee from '../nflteams/Tennessee'
import Washington from '../nflteams/Washington'
import Nfl from '../nflteams/Nfl'
import Hero from '../hero/Hero'

const Navigation = () => {
  return (
    <div className='navigation'>
      <Switch>
        <Route exact path='/' component={Hero} />
        <Route path='/mlbteams/Arizona' component={Arizona} />
        <Route path='/mlbteams/Atlanta' component={Atlanta} />
        <Route path='/mlbteams/Baltimore' component={Baltimore} />
        <Route path='/mlbteams/Boston' component={Boston} />
        <Route path='/mlbteams/Cubs' component={Cubs} />
        <Route path='/mlbteams/Whitesox' component={WhiteSox} />
        <Route path='/mlbteams/Reds' component={Reds} />
        <Route path='/mlbteams/Cleveland' component={Cleveland} />
        <Route path='/mlbteams/Colorado' component={Colorado} />
        <Route path='/mlbteams/Detroit' component={Detroit} />
        <Route path='/mlbteams/Astros' component={Astros} />
        <Route path='/mlbteams/Kansascity' component={KansasCity} />
        <Route path='/mlbteams/Angels' component={Angels} />
        <Route path='/mlbteams/Dodgers' component={Dodgers} />
        <Route path='/mlbteams/Miami' component={Miami} />
        <Route path='/mlbteams/Brewers' component={Brewers} />
        <Route path='/mlbteams/Twins' component={Twins} />
        <Route path='/mlbteams/Mets' component={Mets} />
        <Route path='/mlbteams/Yankees' component={Yankees} />
        <Route path='/mlbteams/Oakland' component={Oakland} />
        <Route path='/mlbteams/Philadelphia' component={Philadelphia} />
        <Route path='/mlbteams/Pittsburgh' component={Pittsburgh} />
        <Route path='/mlbteams/Sandiego' component={Sandiego} />
        <Route path='/mlbteams/Sanfrancisco' component={Sanfrancisco} />
        <Route path='/mlbteams/Seattle' component={Seattle} />
        <Route path='/mlbteams/Stlouis' component={StLouis} />
        <Route path='/mlbteams/Rays' component={Rays} />
        <Route path='/mlbteams/Texas' component={Texas} />
        <Route path='/mlbteams/Toronto' component={Toronto} />
        <Route path='/mlbteams/Nationals' component={Nationals} />
        <Route path='/mlbteams/Mlb' component={MLB} />
        <Route path='/nbateams/AtlantaHawks' component={AtlantaHawks} />
        <Route path='/nbateams/Brooklyn' component={Brooklyn} />
        <Route path='/nbateams/Celtics' component={Celtics} />
        <Route path='/nbateams/Charlotte' component={Charlotte} />
        <Route path='/nbateams/Bulls' component={Bulls} />
        <Route path='/nbateams/Cavs' component={Cavs} />
        <Route path='/nbateams/Dallas' component={Dallas} />
        <Route path='/nbateams/Nuggets' component={Nuggets} />
        <Route path='/nbateams/Pistons' component={Pistons} />
        <Route path='/nbateams/Goldenstate' component={GoldenState} />
        <Route path='/nbateams/Rockets' component={Rockets} />
        <Route path='/nbateams/Indiana' component={Indiana} />
        <Route path='/nbateams/Clippers' component={Clippers} />
        <Route path='/nbateams/Lakers' component={Lakers} />
        <Route path='/nbateams/Memphis' component={Memphis} />
        <Route path='/nbateams/Heat' component={Heat} />
        <Route path='/nbateams/Milwaukee' component={Milwaukee} />
        <Route path='/nbateams/Minnesota' component={Minnesota} />
        <Route path='/nbateams/Neworleans' component={NewOrleans} />
        <Route path='/nbateams/Newyork' component={NewYork} />
        <Route path='/nbateams/Oklahomacity' component={OklahomaCity} />
        <Route path='/nbateams/Orlando' component={Orlando} />
        <Route path='/nbateams/Philadelphia76ers' component={Philadelphia76ers} />
        <Route path='/nbateams/Phoenix' component={Phoenix} />
        <Route path='/nbateams/Portland' component={Portland} />
        <Route path='/nbateams/Sacramento' component={Sacramento} />
        <Route path='/nbateams/Sanantonio' component={SanAntonio} />
        <Route path='/nbateams/Raptors' component={Raptors} />
        <Route path='/nbateams/Utah' component={Utah} />
        <Route path='/nbateams/Wizards' component={Wizards} />
        <Route path='/nflteams/Arizonacards' component={ArizonaCards} />
        <Route path='/nflteams/Bears' component={Bears} />
        <Route path='/nflteams/Browns' component={Browns} />
        <Route path='/nflteams/Buffalo' component={Buffalo} />
        <Route path='/nflteams/Carolina' component={Carolina} />
        <Route path='/nflteams/Chargers' component={Chargers} />
        <Route path='/nflteams/Chiefs' component={Chiefs} />
        <Route path='/nflteams/Cincinnati' component={Cincinnati} />
        <Route path='/nflteams/Cowboys' component={Cowboys} />
        <Route path='/nflteams/Denver' component={Denver} />
        <Route path='/nflteams/Dolphins' component={Dolphins} />
        <Route path='/nflteams/Eagles' component={Eagles} />
        <Route path='/nflteams/Falcons' component={Falcons} />
        <Route path='/nflteams/Giants' component={Giants} />
        <Route path='/nflteams/Greenbay' component={GreenBay} />
        <Route path='/nflteams/Houston' component={Houston} />
        <Route path='/nflteams/Indianapolis' component={Indianapolis} />
        <Route path='/nflteams/Jacksonville' component={Jacksonville} />
        <Route path='/nflteams/Jets' component={Jets} />
        <Route path='/nflteams/Lasvegas' component={LasVegas} />
        <Route path='/nflteams/Lions' component={Lions} />
        <Route path='/nflteams/Newengland' component={NewEngland} />
        <Route path='/nflteams/Nfl' component={Nfl} />
        <Route path='/nflteams/Rams' component={Rams} />
        <Route path='/nflteams/Ravens' component={Ravens} />
        <Route path='/nflteams/Saints' component={Saints} />
        <Route path='/nflteams/Sanfrancisco' component={SanFrancisco} />
        <Route path='/nflteams/Seahawks' component={Seahawks} />
        <Route path='/nflteams/Steelers' component={Steelers} />
        <Route path='/nflteams/Tampabay' component={TampaBay} />
        <Route path='/nflteams/Tennessee' component={Tennessee} />
        <Route path='/nflteams/Vikings' component={Vikings} />
        <Route path='/nflteams/Washington' component={Washington} />
      </Switch>
    </div>
  )
}

export default Navigation