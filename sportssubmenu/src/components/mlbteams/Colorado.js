import React from 'react'
import logo from '../../images/bieber.png'
import logo2 from '../../images/ramirez.png'
import '../styles/Colorado.css'

const Colorado = () => {
  return (
    <div className='col'>
      <h1>Colorado Rockies</h1>
      <p className='rockies'>The Colorado Rockies are a Major League Baseball team. They are based in Denver, Colorado.
        They are a member of the West Division of Major League Baseball's National League. The Rockies colors
        are Rockies Purple, Silver, and Midnight Black. The Rockies began in 1992.
        The Rockies finished the regular season with a 74-87 record. Due to the thin air in Colorado, The ball travels much further which buffs hitters numbers. If players hit really well in Colorado people worry, how good that specific player vs how much were those numbers buffed due to where he played.</p>
      <br />
      <p className='story'>
        The Guardians have lost alot of talent over the last couple of years but they still have two very good players who stand out on the roster.
        One of those players being Shane Bieber.
        Story is a two-time Mlb All-Star; one-time Cy Young Award Winner, 2020 AL ERA leader.
        Trevor Story was drafted in the 4th round of the 2016 Mlb draft by the Indians.
        Bieber has a career 3.29 ERA, 633 strikeouts and a 11.3 K/9.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='cron'>
        The second player who is an elite infielder is Jose Ramirez.
        Jose Ramirez has played every position on the field except for 1st base, pitcher and catcher.
        Jose Ramirez is a three-time Mlb All-Star; Three-time winner of the Silver Slugger award, 2017 AL Extra Base Hits leader and 2020 AL Extra Base Hits leader.
        Jose Ramirez was signed by the Cleveland Indians Braves in November of 2009 as an amateur free agent.
        Ramirez has a career .278 BA 163 HR .354 OBP .501 SLG .855 OPS
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Colorado

