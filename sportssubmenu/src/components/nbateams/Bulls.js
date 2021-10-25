import React from 'react'
import logo from '../../images/ball.png'
import logo2 from '../../images/lavine.png'
import '../styles/Bulls.css'

const Bulls = () => {
  return (
    <div className='chib'>
      <h1>Chicago Bulls</h1>
      <p className='bulls'>The Chicago Bulls are a National Basketball Association team. They are based in Chicago, IL.
        They are a member of the Central Division of National Basketball Association Eastern Conference. The Bulls colors
        are Bulls Red, and Black.The Bulls were founded in 1966. The Bulls record is currently 3-0. </p>
      <br />
      <p className='ball'>
        Lonzo Ball is a 6 foot 6 point guard who is a very good perimeter defender. Lonzo Ball's ability to shoot has always been a weakness of his but he has work on his shooting and over the last few years he has been shooting much better.
        Lonzo Ball made the 2017-18 All-Rookie 2nd Team; 1 Triple-Double during the 2021-22 season
        Lonzo Ball was drafted 2nd overall by the Los Angeles Lakers in the 2017 Nba draft, then was traded to the New Orleans Pelicans on July 6th, 2019 as part of a 3-team trade and then was traded to the Chicago Bulls on August 8th, 2021.
        Ball has a career 11.7 PPG 6.4 APG .398 FG% .354 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='lavine'>
        Zach LaVine is a shooting guard, who is a explosive player when driving to the basket.
        LaVine is a 1-time Nba All-Star; made the 2014-15 All-Rookie 2nd Team; finished 7th in PPG for the 2020-21 season.
        Zach LaVine was drafted 13rd overall by the Minnesota Timberwolves in the 2014 Nba draft, and was traded on June 22nd, 2017.
        LaVine has a career 19.1 PPG 3.8 APG .458 FG% .385 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Bulls