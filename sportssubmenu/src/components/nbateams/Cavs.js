import React from 'react'
import logo from '../../images/sexton.png'
import logo2 from '../../images/mobley.png'
import '../styles/Cavs.css'

const Cavs = () => {
  return (
    <div className='clec'>
      <h1>Cleveland Cavaliers </h1>
      <p className='cavs'>The Cleveland Cavaliers are a National Basketball Association team. They are based in Cleveland, OH.
        They are a member of the Central Division of National Basketball Association Eastern Conference. The Cavs colors
        are Cavaliers Wine, Cavaliers Navy, Cavaliers Gold, and Cavaliers Black.The Cavs were founded in 1970. The Cavs record is currently 1-2. </p>
      <br />
      <p className='sexton'>
        Collin Sexton is a point guard and shooting guard. Collin Sexton is a bit undersized but makes up for it with his ability to score.
        Collin Sexton made the 2018-19 All-Rookie 2nd Team; finished 18th in PPG for the 2020-21 season with 24.3.
        Collin Sexton was drafted 8th overall by the Cleveland Cavaliers in the 2018 Nba draft.
        Sexton has a career 20.2 PPG 3.4 APG .459 FG% .383 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='mobley'>
        Zach LaVine is a shooting guard, who is a explosive player when driving to the basket.
        LaVine is a 1-time Nba All-Star; made the 2014-15 All-Rookie 2nd Team; finished 7th in PPG for the 2020-21 season.
        Zach LaVine was drafted 13rd overall by the Minnesota Timberwolves in the 2014 Nba draft, and was traded on June 22nd, 2017.
        LaVine has a career 19.1 PPG 3.8 APG .458 FG% .385 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Cavs
