import React from 'react'
import logo from '../../images/melo.png'
import logo2 from '../../images/bridges.png'
import '../styles/Charlotte.css'

const Charlotte = () => {
  return (
    <div className='cha'>
      <h1>Charlotte Hornets</h1>
      <p className='hornets'>The Charlotte Hornets are a National Basketball Association team. They are based in Charlotte, NC.
        They are a member of the Southeast Division of National Basketball Association Eastern Conference. The Hornets colors
        are Hornets Purple, Teal, and Gray.The Hornets were founded in 1988. The Hornets record is currently 3-1. </p>
      <br />
      <p className='melo'>
        Lamelo Ball is a Point Guard/ Shooting guard, who came into the nba known for his shooting ability. At 6 foot 7 he is very tall for his position which gives him the ability to shoot over defenders.
        Lamelo Ball is the 2020-21 Rookie of the Year; made the 2020-21 All-Rookie 1st team; 3-time Rookie of the Month Award winner.
        Lamelo Ball was drafted 3rd overall by the Charlotte Hornets in the 2020 Nba draft.
        Ball has a career 16.3 PPG 6.2 APG .440 FG% .369 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='bridges'>
        Miles Bridges is a Small Forward/ Power Forward, who came into the nba known for his dunking ability and his inability to shoot 3 pointers.
        Miles Bridges October 25th, 2021 Player of the Week Award winner.
        Miles Bridges was drafted 12th overall by the Los Angeles Clippers in the 2018 Nba draft and was traded on draft night to the Charlotte Hornets.
        Bridges has a career 11.1 PPG 5.2 RPG .463 FG% .355 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Charlotte