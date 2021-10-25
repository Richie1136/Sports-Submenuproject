import React from 'react'
import logo from '../../images/young.png'
import logo2 from '../../images/collins.png'
import '../styles/Brooklyn.css'

const Brooklyn = () => {
  return (
    <div className='bkn'>
      <h1>Brooklyn Nets</h1>
      <p className='nets'>The Brooklyn Nets are a National Basketball Association team. They are based in Brooklyn, NY.
        They are a member of the Atlantic Division of National Basketball Association Eastern Conference. The Nets colors
        are Black, and White.The Nets were founded in 1967. The Nets record is currently 1-2. </p>
      <br />
      <p className='young'>
        Trae Young led the Atlanta Hawks to the postseason for the first time since 2017. Trae Young is an up and coming point guard who is known for his ability to shoot the ball.
        Trae Young is a one-time Nba All-Star; four-time Rookie of the Month Award winner, and is an three-time Weekly Award winner.
        Trae Young was drafted 5th overall by the Dallas Mavericks in the 2018 Nba draft and was traded on draft night to the Atlanta Hawks.
        Young has a career 24.1 PPG 8.9 APG .430 FG% .343 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='collins'>
        John Collins is one of the most athletic big men in the NBA.
        John Collins made the 2017-18 All-Rookie 2nd Team
        John Collins was drafted 19th overall by the Atlanta Hawks in the 2017 Nba draft.
        Collins has a career 16.5 PPG 8.5 RPG .567 FG% .380 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Brooklyn

