import React from 'react'
import logo from '../../images/butler.png'
import logo2 from '../../images/adebayo.png'
import '../styles/Heat.css'

const Heat = () => {
  return (
    <div className='mia'>
      <h1>Miami Heat</h1>
      <p className='heat'>The Miami Heat are a National Basketball Association team. They are based in Miami, FL.
        They are a member of the Southeast Division of National Basketball Association Western Conference. The Heat colors
        are Red, Yellow, and Black.The Heat were founded in 1988. The Heat record is currently 6-1. </p>
      <br />
      <p className='butler'>
        Jummy Butler is a Shooting Guard / Small Forward.
        Jummy Butler is a 5-time Nba All-Star; 2014-15 Most Improved player; 4-time All-NBA; 5-time All-Defensive; 2020-21 Steal Champion.
        Jummy Butler was drafted 30th overall by the Chicago Bulls in the 2011 Nba draft, then was traded to the Minnesota Timberwolves on June 22nd, 2017, then was traded on November 12th, 2018 to the Philadelphia 76ers and was traded again on July 6th, 2019 to the Miami Heat.
        Butler has a career 17.5 PPG 5.3 RPG .459 FG% .327 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='adebayo'>
        Bam Adebayo is a Power Forward/ Center.
        Bam Adebayo is a 1-time Nba All-Star; 2-time All-Defensive; All-Rookie 1st team; 3-time Rookie of the Month Award winner.
        Bam Adebayo was drafted 14th overall by the Miami Heat in the 2017 Nba draft.
        Adebayo has a career 12.5 PPG 8.1 RPG .557 FG% .159 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Heat
