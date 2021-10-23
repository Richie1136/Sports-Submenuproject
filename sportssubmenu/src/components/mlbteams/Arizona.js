import React from 'react'
import logo from '../../images/kertel.png'
import logo2 from '../../images/pavin.png'
import '../styles/Arizona.css'

const Arizona = () => {
  return (
    <div className='ari'>
      <h1>Arizona Diamondbacks</h1>
      <p className='diamondbacks'>The Arizona Diamondbacks are a Major League Baseball team. They are based in Phoenix, AZ.
        They are a member of the Western Division of Major League Baseball's National League. The Diamondbacks colors
        are Sedona Red, Sonoran Sand, Black, Teal and White. The Diamondbacks were founded in 1998.
        The Arizona Diamondbacks finished this season with a 52-110 record which was tied for the worst in the league. </p>
      <br />
      <p className='marte'>
        The Diamondbacks don't have many good players given the fact of there record this past season but they have some good players . One of the players
        who is on the Arizona Diamondbacks is Ketel Marte.
        Ketel Marte is a utily player who has played Shortstop, second base, outfield and third base for the Arizona Diamondbacks.
        Marte is a 1-time Mlb All-Star; finished 2nd in 2019 NL BA hitting .329 & 2019 September 8th NL Player of the week winner.
        Kertel Marte was signed by the Seattle Mariners in July of 2011 as an amateur free agent and then was traded to the diamondbacks on November 23rd, 2016.
        Kertel Marte has a career .287 BA 70 HR .346 OBP .456 SLG .802 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='smith'>
        One of the other good player on the Ariozna Diamondbacks is Pavin Smith. Pavin Smith was a rookie during the 2021 Major league season.
        Pavin Smith is a outfielder and 1st baseman.
        Pavin Smith was drafted in the 1st round in the 2017 Mlb draft.
        This past season Smith hit .267 BA 11 HR .328 OBP .404 SLG .732 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Arizona
