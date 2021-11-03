import React from 'react'
import logo from '../../images/doncic.png'
import logo2 from '../../images/porzingis.png'
import '../styles/Dallas.css'

const Dallas = () => {
  return (
    <div className='dal'>
      <h1>Dallas Mavericks</h1>
      <p className='mavs'>The Dallas Mavericks are a National Basketball Association team. They are based in Dallas, TX.
        They are a member of the Southwest Division of National Basketball Association Western Conference. The Mavericks colors
        are Royal Blue, Navy Blue, Silver, and Black.The Mavericks were founded in 1980. The Mavericks record is currently 4-3. </p>
      <br />
      <p className='doncic'>
        Luka Doncic is a Point Guard / Shooting Guard.
        Luka Doncic is a 2-time Nba All-Star; 2018-19 Rookie of the Year; 2019-20 All-NBA 1st team; 6-time Rookie of the Month Award winner.
        Luka Doncic was drafted 3rd overall by the Atlanta Hawks in the 2018 Nba draft, then was traded on draft night to the Dallas Mavericks.
        Doncic has a career 25.6 PPG 8.3 RPG .456 FG% .329 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='porzingis'>
        Kristaps Porzingis is a Power Forward/ Center.
        Kristaps Porzingis is a 1-time Nba All-Star; 2015-16 All-Rookie 1st team; 3-time Rookie of the Month Award winner.
        Kristaps Porzingis was drafted 4th overall by the New York Knicks in the 2015 Nba draft, then was traded on January 31st, 2019 to the Dallas Mavericks.
        Porzingis has a career 18.6 PPG 7.8 RPG .440 FG% .360 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Dallas
