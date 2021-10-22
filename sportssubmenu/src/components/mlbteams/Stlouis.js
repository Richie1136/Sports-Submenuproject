import React from 'react'
import logo from '../../images/wainwright.png'
import logo2 from '../../images/goldschmidt.png'
import '../styles/Stlouis.css'

const Stlouis = () => {
  return (
    <div className='stl'>
      <h1>St. Louis Cardinals</h1>
      <p className='cardinals'>The St. Louis Cardinals are a Major League Baseball team. They are based in St. Louis ,MO.
        They are a member of the Central Division of Major League Baseball's National League. The Cardinals colors
        are Cardinal Red, Navy, Yellow and White. The Cardinals were founded in 1882.
        The Cardinals finished the regular season with a 90-72 record, and lost in the wild card game to the Los Angeles Dodgers. The Cardinals went on a 17 game winning streak from September 11th until September 29th which helped propel them into the postseason.
      </p>
      <br />
      <p className='wainwright'>
        Adam Wainwright is the second longest tenured cardinal at 16 years years being with the organization.
        Adam Wainwright was drafted in the 1st round by the Braves in the 2000 MLB draft and was traded on December 12th, 2003 to the St. Louis Cardinals.
        Adam Wainwright is a three-time Mlb All-Star; 2009, & 2013 NL Gold Glove winner; 2017 NL P Silver Slugger award winner.
        Wainwright has a career 3.35 ERA, 2004 strikeouts and a 7.6 K/9.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='goldschmidt'>
        Paul Goldschmidt has been one of the best all around first basemans throughout his career.
        Paul Goldschmidt was drafted in the 8th round by the Diamondbacks in the 2009 MLB draft and was traded on December 5th, 2018 to the St. Louis Cardinals.
        Paul Goldschmidt is a six-time Mlb All-Star; 2013, 2015 & 2017 NL Gold Glove winner; 4-time Silver Slugger award winner.
        Goldschmidt has a career .293 BA 280 HR .389 OBP .521 SLG .911 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Stlouis
