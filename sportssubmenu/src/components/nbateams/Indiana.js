import React from 'react'
import logo from '../../images/turner.png'
import logo2 from '../../images/brogdon.png'
import '../styles/Indiana.css'

const Indiana = () => {
  return (
    <div className='ind'>
      <h1>Indiana Pacers</h1>
      <p className='pacers'>The Indiana Pacers are a National Basketball Association team. They are based in Indianapolis, IN.
        They are a member of the Central Division of National Basketball Association Eastern Conference. The Pacers colors
        are Pacers Blue, Yellow, and Silver.The Pacers were founded in 1967. The Heat record is currently 3-6. </p>
      <br />
      <p className='turner'>
        Myles Turner is a Power Forward / Center.
        Myles Turner 2015-16 All-Rookie 2nd team; 2-time Block champ; February 2016 Rookie of the Month.
        Myles Turner was drafted 11th overall by the Indiana Pacers in the 2015 Nba draft.
        Turner has a career 12.8 PPG 6.7 RPG .488 FG% .354 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='brogdon'>
        Malcolm Brogdon is a Point Guard / Shooting Guard.
        Malcolm Brogdon 2016-17 All-Rookie 1st team; 2016-17 Rookie of the Year.
        Malcolm Brogdon was drafted 36th overall by the Milwaukee Bucks in the 2016 Nba draft, then was traded by the Bucks on July 6th, 2019 to the Indiana Pacers.
        Brogdon has a career 15.2 PPG 4.7 APG .465 FG% .382 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Indiana
