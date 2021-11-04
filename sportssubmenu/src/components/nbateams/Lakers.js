import React from 'react'
import logo from '../../images/james.png'
import logo2 from '../../images/davis.png'
import '../styles/Lakers.css'

const Lakers = () => {
  return (
    <div className='lal'>
      <h1>Los Angeles Lakers</h1>
      <p className='lakers'>The Los Angeles Lakers are a National Basketball Association team. They are based in Los Angeles, CA.
        They are a member of the Pacific Division of National Basketball Association Western Conference. The Lakers colors
        are Lakers Purple, Gold, and Black.The Lakers were founded in 1947. The Lakers record is currently 5-3. </p>
      <br />
      <p className='james'>
        Lebron James is a Small Forward, Power Forward, Point Guard and Shooting Guard.
        Lebron James is a 17-time Nba All-Star; 17-time All-NBA; 4-time Finals MVP; 2007-08 Scoring Champ; 6-time All-Defensive; 4-time MVP; 2019-20 Assist Champ; 2003-04 All-Rookie 1st team; 4-time NBA Champ; 2003-04 Rookie of the Year.
        Lebron James was drafted 1st overall by the Cleveland Cavaliers in the 2003 Nba draft, the was traded on July 10th, 2010 to the Miami Heat and then signed as a free agent with the Los Angeles Lakers.
        James has a career 27.0 PPG 7.4 RPG .504 FG% .345 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='davis'>
        Malcolm Brogdon is a Point Guard / Shooting Guard.
        Malcolm Brogdon 2016-17 All-Rookie 1st team; 2016-17 Rookie of the Year.
        Malcolm Brogdon was drafted 36th overall by the Milwaukee Bucks in the 2016 Nba draft, then was traded by the Bucks on July 6th, 2019 to the Indiana Pacers.
        Brogdon has a career 15.2 PPG 4.7 APG .465 FG% .382 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Lakers
