import React from 'react'
import logo from '../../images/judge.png'
import logo2 from '../../images/cole.png'
import '../styles/Yankees.css'

const Yankees = () => {
  return (
    <div className='nyy'>
      <h1>New York Yankees </h1>
      <p className='yankees'>The New York Yankees are a Major League Baseball team. They are based in Bronx, NY.
        They are a member of the Eastern Division of Major League Baseball's American League. The Yankees colors
        are Blue, Red, Uniform Navy and Uniform Gray. The Yankees were founded in 1903.
        The Yankees finished the regular season with a 92-70 record and lost to the Red Sox in the American League Wild Card Game.
      </p>
      <br />
      <p className='judge'>
        Aaron Judge has been a top 20 player throughout his mlb career. At 6 foot 7 inches aaron judge is an elite defender in the outfield, spending time in center field and his main position right field.
        Aaron Judge was drafted in the 1st round by the Yankees in the 2013 MLB draft.
        Aaron Judge is a three-time Mlb All-Star; finished 2nd in the 2017 AL MVP; 2017 Silver Slugger Award winner; 2017 AL Home Runs leader with 52; finished 2nd in 2017 AL Rbis with 114.
        Judge has a career .276 BA 158 HR .386 OBP .554 SLG .940 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='cole'>
        Gerrit Cole has become a top 5 pitcher in baseball after starting his career with not much success with the pirates.
        Gerrit Cole was drafted in the 1st round by the Pirates in the 2011 MLB draft, then was traded on January 13th, 2018 to the Houston Astros and was signed by the Yankees as a free agent on December 18th, 2019.
        Gerrit Cole is a four-time All-Star; 2019 AL ERA champion;  6-time Monthly Awards winner; 2019 September 29th AL Player of the Week winner; 2018 & 2019 AL K per 9 leader with 12.399 & 13.818 respectively; 2019 AL Strikeout leader with 326.
        Cole has a career 3.20 ERA 1673 strikeouts and a 10.4 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Yankees
