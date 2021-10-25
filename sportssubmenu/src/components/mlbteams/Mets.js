import React from 'react'
import logo from '../../images/degrom.png'
import logo2 from '../../images/lindor.png'
import '../styles/Mets.css'

const Mets = () => {
  return (
    <div className='nym'>
      <h1>New York Mets</h1>
      <p className='mets'>The New York Mets are a Major League Baseball team. They are based in Queens, NY.
        They are a member of the Eastern Division of Major League Baseball's National League. The Mets colors
        are Blue, and Orange. The Mets were founded in 1962.
        The Mets finished the regular season with a 77-85 record. The Mets were one of the most disappointing teams in the mlb this past season, after trading for lindor and having one of the best pitchers in all of baseball, many people believed that this team was a playoff team and should contend for the division, however that did not happen.  </p>
      <br />
      <p className='degrom'>
        Jacob deGrom has been one of the best pitchers in baseball over the last 7 years. Unfortunately for deGrom he suffered right forearm tightness on July 18th which kept him out for the rest of the season.
        Jacob deGrom was drafted in the 9th round by the Mets in the 2010 MLB draft.
        Jacob deGrom is a four-time Mlb All-Star; two-time NL CY Young Award winner; 2018 NL ERA champion.
        deGrom has a career 2.50 ERA 1505 strikeouts and a 10.7 K/9.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='lindor'>
        Francisco Lindor is a shortstop. Francisco Lindor was traded from the Cleveland Indians to the New York Mets on January 7th 2021.
        Francisco Lindor was drafted in the 1st round by the Indians in the 2011 MLB draft.
        Francisco Lindor is a four-time Mlb All-Star; two-time AL Silver Slugger Award winner; two-time AL Gold Glove Award winner.
        Lindor has a career .278 BA 158 HR .343 OBP .478 SLG .821 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Mets
