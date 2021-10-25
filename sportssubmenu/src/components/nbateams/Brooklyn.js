import React from 'react'
import logo from '../../images/durant.png'
import logo2 from '../../images/harden.png'
import '../styles/Brooklyn.css'

const Brooklyn = () => {
  return (
    <div className='bkn'>
      <h1>Brooklyn Nets</h1>
      <p className='nets'>The Brooklyn Nets are a National Basketball Association team. They are based in Brooklyn, NY.
        They are a member of the Atlantic Division of National Basketball Association Eastern Conference. The Nets colors
        are Black, and White.The Nets were founded in 1967. The Nets record is currently 1-2. </p>
      <br />
      <p className='durant'>
        Kevin Durant is arguably the best player in the nba and in my opinion he is.
        Kevin Durant is a 11-time Nba All-Star; 4-time Scoring Champ; 9-time All-Nba; 2-time Nba Champ.
        Kevin Durant was drafted 2nd overall by the Seattle SuperSonics aka Oklahoma City Thunder in the 2007 Nba draft, then signed a 2 year deal with the Golden State Warriors on July 4th, 2016, then signed another 2 year deal on July 6th, 2017, then signed another 2 year deal on July 7th, 2018 and then was part of a sign and trade with the Brooklyn Nets on July 7th, 2019.
        Durant has a career 27.0 PPG 7.1 RPG .495 FG% .384 3P%.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='harden'>
        James harden is one of the toughest guards to guard in the nba.
        Harden is a 9-time Nba All-Star; 3-time Scoring Champ; 7-time All-Nba; 2017-18 MVP.
        James Harden was drafted 3rd overall by the Oklahoma City Thunder in the 2009 Nba draft, then was traded on October 27th, 2012, then signed a multi-year contact with the Rockets on July 9th, 2016, then signed an extension on July 8th, 2017 and was traded to the Nets on January 13th, 2021 as part of a 4-team trade.
        Harden has a career 25.1 PPG 6.5 APG .444 FG% .364 3P%.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Brooklyn

