import React from 'react'
import logo from '../../images/doncic.png'
import logo2 from '../../images/porzingis.png'
import '../styles/Heat.css'

const Heat = () => {
  return (
    <div className='mia'>
      <h1>Miami Heat</h1>
      <p className='mavs'>The Miami Heat are a National Basketball Association team. They are based in Miami, FL.
        They are a member of the Southeast Division of National Basketball Association Western Conference. The Heat colors
        are Red, Yellow, and Black.The Heat were founded in 1988. The Heat record is currently 6-1. </p>
      <br />
      <p className='butler'>
        Jummy Butler is a Point Guard / Shooting Guard.
        Jummy Butler is a 2-time Nba All-Star; 2018-19 Rookie of the Year; 2019-20 All-NBA 1st team; 6-time Rookie of the Month Award winner.
        Jummy Butler was drafted 3rd overall by the Atlanta Hawks in the 2018 Nba draft, then was traded on draft night to the Dallas Mavericks.
        Butler has a career 25.6 PPG 8.3 RPG .456 FG% .329 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='adebayo'>
        Bam Adebayo is a Power Forward/ Center.
        Bam Adebayo is a 1-time Nba All-Star; 2015-16 All-Rookie 1st team; 3-time Rookie of the Month Award winner.
        Bam Adebayo was drafted 4th overall by the New York Knicks in the 2015 Nba draft, then was traded on January 31st, 2019 to the Dallas Mavericks.
        Adebayo has a career 18.6 PPG 7.8 RPG .440 FG% .360 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Heat
