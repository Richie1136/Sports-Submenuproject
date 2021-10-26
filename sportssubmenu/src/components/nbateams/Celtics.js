import React from 'react'
import logo from '../../images/tatum.png'
import logo2 from '../../images/brown.png'
import '../styles/Celtics.css'

const Celtics = () => {
  return (
    <div className='bosc'>
      <h1>Boston Celtics</h1>
      <p className='celtics'>The Boston Celtics are a National Basketball Association team. They are based in Boston, MA.
        They are a member of the Atlantic Division of National Basketball Association Eastern Conference. The Celtics colors
        are Celtics Green, Celtics Gold, Celtics Brown, White, and Celtics Black.The Celtics were founded in 1946. The Celtics record is currently 2-2. </p>
      <br />
      <p className='tatum'>
        Jayson Tatum is a Small Forward/ Power Forward. Jayson Tatum is one of the best scorers in the nba.
        Jayson Tatum is a 2-time Nba All-Star; made the 2017-18 All-Rookie 1st team; 2019-20 All-Nba 3rd team.
        Jayson Tatum was drafted 3rd overall by the Boston Celtics in the 2017 Nba draft.
        Tatum has a career 19.5 PPG 6.3 RPG .457 FG% .394 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='brown'>
        Jaylen Brown is a Shooting Guard/Small Forward. Jaylen Brown came into the nba known as someone who couldn't shoot the ball but while he has been in the league he has made tremendous strides to become a better shooter.
        Jaylen Brown is a 1-time Nba All-Star; made the 2016-17 All-Rookie 2nd team; Dec 30th, 2019 Player of the Week & Feb 3rd, 2020 Player of the Week.
        Jaylen Brown was drafted 3rd overall by the Boston Celtics in the 2016 Nba draft.
        Brown has a career 15.2 PPG 4.7 RPG .473 FG% .378 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Celtics
