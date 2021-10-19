import React from 'react'
import logo from '../../images/soto.png'
import logo2 from '../../images/bell.png'
import '../styles/Nationals.css'

const Nationals = () => {
  return (
    <div className='was'>
      <h1>Washington Nationals</h1>
      <p className='nationals'>The Washington Nationals are a Major League Baseball team. They are based in Washington, DC.
        They are a member of the Eastern Division of Major League Baseball's National League. The Nationals colors
        are Red, Navy Blue, and White. The Nationals were founded in 1969.
        The Nationals finished the regular season with a 65-97 record. The Nationals are in the rebuilding stages, after struggling during the first half of the season, the nationals traded away two of there best players.
      </p>
      <br />
      <p className='soto'>
        Juan Soto is one of the most underrated players and most exiciting players in all of baseball , soto will be a cornerstone for the nationals future.
        Juan Soto is a outfielder.
        Juan Soto was signed by the Washington Nationals on July 2nd, 2015 as a free agent.
        Juan Soto is a one-time Mlb All-Star; 2020 Silver Slugger Award winner; 2020 NL Batting Average leader; 2020 NL On-Base% leader and 2021 NL On-Base% leader.
        Soto has a career .301 BA 98 HR .432 OBP .550 SLG .981 OPS.

      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='bell'>
        Josh Bell was one of the better players on this nationals team during the 2021 season.
        Josh Bell is a first baseman and outfielder.
        Josh Bell was drafted in the 2nd round by the Pirates in the 2011 MLB draft and then traded on December 24th, 2020 to the Washington Nationals.
        Josh Bell is a one-time Mlb All-Star; 2019 May NL Player of the Month and 2019 May 19th NL Player of the Week.
        Bell has a career .261 BA 113 HR .348 OBP .468 SLG .816 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Nationals
