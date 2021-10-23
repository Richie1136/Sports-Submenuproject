import React from 'react'
import logo from '../../images/acuna.png'
import logo2 from '../../images/freeman.png'
import '../styles/Atlanta.css'

const Atlanta = () => {
  return (
    <div className='atl'>
      <h1>Atlanta Braves</h1>
      <p className='braves'>The Atlanta Braves are a Major League Baseball team. They are based in Atlanta, GA.
        They are a member of the Eastern Division of Major League Baseball's National League. The Braves colors
        are Scarlett, Navy, Gold and White. The braves are the only existing major league franchise to have played every season since professional baseball came to existence.
        The Braves were founded in 1871.
        The Atlanta Braves finished the regular season with a 88-73 record and have advanced to the National League Championship Series and will face the LA Dodgers. </p>
      <br />
      <p className='acuna'>
        The Braves have some really good players on the roster, but two in particular stand out to me as the best. One of the players
        being Ronald Acuna jr. Ronald Acuna is one of the most electric and exciting players to watch in all of baseball. Unfortunately Ronald Acuna suffered a season-ending knee injury in mid july.
        Ronald Acuna is a outfielder.
        Acuna is a two-time Mlb All-Star; 2018 National League Rookie of the Year, and is an two-time Silver Slugger Award winner.
        Ronald Acuna was signed by the Atlanta Braves in July of 2014 as an amateur free agent.
        Acuna has a career .281 BA 105 HR .376 OBP .549 SLG .925 OPS
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='freeman'>
        Another top player on the Atlanta Braves is Freddie Freeman. Freddie Freeman is amongst the best 1st basemans in all of baseball and has been a stable there since he started his career back in 2010.
        Freddie Freeman is a five-time Mlb All-Star; two-time Silver Slugger Award winner and a one-time National League Most Valuable Player.
        Freddie Freeman was drafted in the 2nd round by the Atlanta Braves in the 2007 Mlb draft.
        Freeman has a career .295 BA 271 HR .384 OBP .509 SLG .893 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Atlanta
