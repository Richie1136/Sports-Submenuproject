import React from 'react'
import logo from '../../images/story.png'
import logo2 from '../../images/cron.png'
import '../styles/Colorado.css'

const Colorado = () => {
  return (
    <div className='col'>
      <h1>Colorado Rockies</h1>
      <p className='rockies'>The Colorado Rockies are a Major League Baseball team. They are based in Denver, Colorado.
        They are a member of the West Division of Major League Baseball's National League. The Rockies colors
        are Rockies Purple, Silver, and Midnight Black. The Rockies began in 1992.
        The Rockies finished the regular season with a 74-87 record. Due to the thin air in Colorado, The ball travels much further which buffs hitters numbers. If players hit really well in Colorado people worry, how good that specific player vs how much were those numbers buffed due to where he played.
        The lack of quality pitching has been a major issue for the organization for years.
      </p>
      <br />
      <p className='story'>
        Trevor Story has been one of the rockies best players for years now.
        Trevor Story was a mid season trade candidate this past season due to the fact that he could bring some value back to the rockies organization and is a free agent, but no trade ever came about.
        Story is a two-time Mlb All-Star; two-time NL Silver Slugger Award winner; 2018 NL Extra Base Hits leader.
        Trevor Story was drafted in the 1st round of the 2011 Mlb draft by the Rockies.
        Story has a career .272 BA 158 HR .340 OBP .523 SLG .863 OPS
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='cron'>
        The second player who I selected from the Rockies roster is CJ Cron whos full name is Christopher John Cron.
        CJ Cron is a 1st baseman.
        CJ Cron is a 2021 August NL Player of the Month winner and 2021 August 8th NL Player of the Week winner.
        CJ Cron was drafted in the 1st round of the 2011 Mlb draft by the Angels.
        Cron has a career .261 BA 146 HR .323 OBP .475 SLG .798 OPS
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Colorado

