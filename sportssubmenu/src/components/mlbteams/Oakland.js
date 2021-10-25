import React from 'react'
import logo from '../../images/olson.png'
import logo2 from '../../images/chapman.png'
import '../styles/Oakland.css'

const Oakland = () => {
  return (
    <div className='oak'>
      <h1>Oakland Athletics</h1>
      <p className='athletics'>The Oakland Athletics are a Major League Baseball team. They are based in Oakland,CA.
        They are a member of the Western Division of Major League Baseball's American League. The Athletics colors
        are Green, Gold, and Gray. The Athletics were founded in 1901.
        The Athletics finished the regular season with a 86-76 record.
      </p>
      <br />
      <p className='olson'>
        Matt Olson is a terrific all around player, he is a solid hitter with tons of power from the left side of the plate and is one of, if not the best defensive first baseman in the league.
        Matt Olson was drafted in the 1st round by the Athletics in the 2012 MLB draft.
        Matt Olson is a one-time Mlb All-Star; 2018 & 2019 AL Gold Glove Award winner.
        Olson has a career .252 BA 142 HR .348 OBP .511 SLG .859 OPS.

      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='chapman'>
        Matt Chapman is known for being elite defensively and arguably one of the best, if not the best defensive infielders ever.
        Matt Chapman is a third baseman.
        Matt Chapman was drafted in the 1st round by the Athletics in the 2014 MLB draft.
        Matt Chapman is a one-time Mlb All-Star; 2018 & 2019 AL Gold Glove Award winner.
        Chapman has a career .243 BA 111 HR .330 OBP .478 SLG .808 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Oakland
