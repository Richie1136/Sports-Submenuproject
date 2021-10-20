import React from 'react'
import logo from '../../images/votto.png'
import logo2 from '../../images/castellanos.png'
import '../styles/Reds.css'

const Reds = () => {
  return (
    <div className='cin'>
      <h1>Cincinnati Reds</h1>
      <p className='reds'>The Cincinnati Reds are a Major League Baseball team. They are based in Cincinnati ,OH.
        They are a member of the Central Division of Major League Baseball's National League. The Reds colors
        are Red,and Black. The Reds were founded in 1881.
        The Reds finished the regular season with a 83-79 record.
      </p>
      <br />
      <p className='votto'>
        Joey Votto is the longest tenured reds player. Joey Votto has been one of the most consistent hitters in baseball over the last 13 seasons.
        Joey Votto was drafted in the 2nd round by the Reds in the 2002 MLB draft.
        Joey Votto is a 1st baseman.
        Joey Votto is a six-time Mlb All-Star; 2010 NL MVP; 2011 NL Gold Glove; 7-time NL OBP% leader.
        Votto has a career .302 BA 331 HR .416 OBP .520 SLG .937 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='castellanos'>
        Nick Castellonas has always been a really good hitter but the 2021 season was his best hitting season of his career.
        Nick Castellonas was drafted in the 1st round by the Tigers in the 2010 MLB draft and was traded on July 31st, 2019 to the Chicago Cubs and was signed as a free agent by the Cincinnati Reds on January 27th,2020.
        Nick Castellonas is a outfielder.
        Nick Castellonas is a one-time Mlb All-Star; 2019 ML leader in doubles with 58 & 2017 AL leader in triples with 10.
        Castellonas has a career .278 BA 168 HR .329 OBP .486 SLG .814 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Reds

