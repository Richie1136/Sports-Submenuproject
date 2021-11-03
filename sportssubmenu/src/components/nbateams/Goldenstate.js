import React from 'react'
import logo from '../../images/curry.png'
import logo2 from '../../images/thompson.png'
import '../styles/Goldenstate.css'

const Goldenstate = () => {
  return (
    <div className='gsw'>
      <h1>Golden State Warriors</h1>
      <p className='warriors'>The Golden State Warriors are a National Basketball Association team. They are based in San Francisco, CA.
        They are a member of the Pacific Division of National Basketball Association Western Conference. The Warriors colors
        are Warriors Blue, and Golden Yellow.The Warriors were founded in 1946. The Warriors record is currently 5-1. </p>
      <br />
      <p className='curry'>
        Stephen Curry is a Point Guard.
        Stephen Curry is a 7-time Nba All-Star; 2-time Most Valuable Player Award winner; 3-time Nba champiiom; 2009-10 All-Rookie 1st team.
        Stephen Curry was drafted 7th overall by the Golden State Warriors in the 2009 Nba draft.
        Curry has a career 24.2 PPG 6.5 APG .476 FG% .432 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='thompson'>
        Klay Thompson is a Shooting Guard.
        Klay Thompson is currently recovering from a torn ACL which he suffered on June 13th, 2019, in Game 6 of the NBA Finals against the Toronto Raptors.
        Klay Thompson is a 5-time Nba All-Star; 3-time Nba champion; 2011-12 All-Rookie 1st team; 2018-19 All-Defensive 2nd team.
        Klay Thompson was drafted 11th overall by the Golden State Warriors in the 2011 Nba draft.
        Thompson has a career 19.5 PPG 3.5 RPG .459 FG% .419 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Goldenstate
