import React from 'react'
import logo from '../../images/melo.png'
import logo2 from '../../images/bridges.png'
import '../styles/Clippers.css'

const Clippers = () => {
  return (
    <div className='lac'>
      <h1>Los Angeles Clippers</h1>
      <p className='clippers'>The Los Angeles Clippers are a National Basketball Association team. They are based in Los Angeles, CA.
        They are a member of the Pacific Division of National Basketball Association Western Conference. The Clippers colors
        are Red, Blue, Silver, and Black.The Clippers were founded in 1970. The Clippers record is currently 1-2. </p>
      <br />
      <p className='george'>
        Paul George is a Small Forward/ Power Forward.
        Paul George is a 7-time Nba All-Star; 2018-19 STL Champ; 4-time All-Defensive; 6-time All-Nba; 2012-13 Most Improved player; 2010-11 All-Rookie 2nd team.
        Paul George was drafted 10th overall by the Indiana Pacers in the 2010 Nba draft, then was traded on July 6th, 2017 to the Oklahoma City Thunder and then was traded again to the Los Angeles Clippers on July 10th, 2019.
        George has a career 20.3 PPG 6.4 RPG .437 FG% .384 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='leonard'>
        Miles Bridges is a Small Forward/ Power Forward, who came into the nba known for his dunking ability and his inability to shoot 3 pointers.
        Miles Bridges October 25th, 2021 Player of the Week Award winner.
        Miles Bridges was drafted 12th overall by the Los Angeles Clippers in the 2018 Nba draft and was traded on draft night to the Charlotte Hornets.
        Bridges has a career 11.1 PPG 5.2 RPG .463 FG% .355 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Clippers
