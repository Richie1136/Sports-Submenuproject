import React from 'react'
import logo from '../../images/burnes.png'
import logo2 from '../../images/woodruff.png'
import '../styles/Brewers.css'

const Brewers = () => {
  return (
    <div className='mil'>
      <h1>Milwaukee Brewers</h1>
      <p className='brewers'>The Milwaukee Brewers are a Major League Baseball team. They are based in Milwaukee, WI.
        They are a member of the Central Division of Major League Baseball's National League. The Brewers colors
        are Yellow,and Navy Blue. The brewers were founded in 1969.
        The Brewers finished the regular season with a 95-67 record and lost in the National League Division series to the Atlanta Braves.</p>
      <br />
      <p className='burnes'>
        The Brewers have a talented roster, which is led by a fantasic duo of starting pitchers and a solid bullpen. The two pitchers are amongest the best in the mlb as starters.One of the players
        being Corbin Burnes.
        Burnes is a one-time Mlb All-Star; one-time NL ERA champion and one-time NL K/9 champion.
        Corbin Burnes was drafted in the 4th round of the 2016 Mlb draft by the brewers.
        Burnes has a career 3.39 ERA, 427 strikeouts and a 12.3 K/9.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='woodruff'>
        The second pitcher who is apart of the fantasic duo is Brandon Woodruff.
        Woodruff is a two-time Mlb All-Star; 2021 May 30th NL Player of the Week.
        Brandon Woodruff was drafted in the 11th round of the 2014 Mlb draft by the brewers.
        Woodruff has a career 3.32 ERA, 524 strikeouts and a 10.3 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Brewers
