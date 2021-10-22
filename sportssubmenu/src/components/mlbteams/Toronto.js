import React from 'react'
import logo from '../../images/guerrero.png'
import logo2 from '../../images/semien.png'
import '../styles/Toronto.css'

const Toronto = () => {
  return (
    <div className='tor'>
      <h1>Toronto Blue Jays</h1>
      <p className='bluejays'>The Toronto Blue Jays are a Major League Baseball team. They are based in Toronto ,ON.
        They are a member of the Eastern Division of Major League Baseball's American League. The Blue Jays colors
        are Blue, Navy Blue and Red. The Blue Jays were founded in 1977.
        The Blue Jays finished the regular season with a 91-71 record. The Toronto Blue Jays are a really dangerous offensive team, with a handful of explosive players.
      </p>
      <br />
      <p className='guerrero'>
        Vladimir Guerrero Jr. had alot of hype around him when he was going through the minor league system and might already be in the conversation for top 15 player after a little over 1 year of service time.
        Vladimir Guerrero Jr. is a first baseman and third baseman.
        Vladimir Guerrero Jr. was signed by the Toronto Blue Jays in July of 2015 as an free agent.
        Vladimir Guerrero Jr. is a one-time Mlb All-Star; 2021 AL Home Run leader with 48; 2021 AL On-Base% leader at .401 & 2021 AL Slugging% leader at .601.
        Guerrero Jr. has a career .289 BA 72 HR .367 OBP .517 SLG .884 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='semien'>
        Marcus Semien has his best offensive season of his career hitting a career high in homeruns and rbis as well as SLG %.
        Marcus Semien was drafted in the 6th round by the White Sox in the 2011 MLB draft, then was traded on December 9th, 2014 to the Oakland Athletics and then was signed as a free agent by the Blue Jays on January 30th, 2021 .
        Marcus Semien 2021 AL leader in extra base hits with 86; 2021 May AL Player of the Month.
        Semien has a career .256 BA 160 HR .324 OBP .444 SLG .768 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Toronto
