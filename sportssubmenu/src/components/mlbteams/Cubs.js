import React from 'react'
import logo from '../../images/contreras.png'
import logo2 from '../../images/hendricks.png'
import '../styles/Cubs.css'

const Cubs = () => {
  return (
    <div className='chc'>
      <h1>Chicago Cubs</h1>
      <p className='cubs'>The Chicago Cubs are a Major League Baseball team. They are based in Chicago, Illinois.
        They are a member of the Central Division of Major League Baseball's National League. The Cubs colors
        are Blue, and Red. The Cubs began in 1903.
        The Cubs finished the regular season with a 71-91 record. After winning the first world series in 108 years, the team didnt perform up to expectations the follow 4 years, the team decided to trade away their best players to prepare for the future. Due to that the team finished below .500 and now is in rebuild mode.      </p>
      <br />
      <p className='contreras'>
        Although the cubs traded away alot of their best players, one player who wasn't traded during this past season was Willson Contreras. Contreras was one of the key pieces to the cubs world series run back in 2016.
        Willson Contreras is a catcher and outfield.
        Willson Contreras was signed by the Cubs in July of 2009 as a 3rd baseman.
        Contreras is a two-time Mlb All-Star; 2017 August 6th NL Player of the Week winner.
        Contreras has a career .259 BA 95 HR .349 OBP .458 SLG .807 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='hendricks'>
        The second player who I selected from the Cubs roster is Kyle Hendricks. Although Kyle Hendricks had a very rough year this past season, he was a vital pitcher during the 2016 world series run.
        Kyle Hendricks is a 2016 NL Pitching Title winner; 2016 NL ERA winner and 2016 August NL Pitcher of the Month winner.
        Kyle Hendricks was drafted in the 8th round of the 2011 Mlb draft by the Texas Rangers.
        Hendricks has a career 3.36 ERA, 1013 strikeouts and a 7.4 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Cubs
