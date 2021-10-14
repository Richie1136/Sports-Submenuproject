import React from 'react'
import logo from '../../images/bogaerts.png'
import logo2 from '../../images/devers.png'
import '../styles/Boston.css'

const Boston = () => {
  return (
    <div className='bos'>
      <h1>Boston Red Sox</h1>
      <p className='boston'>The Boston Red Sox are a Major League Baseball team. They are based in Boston, Massachusetts.
        They are a member of the Eastern Division of Major League Baseball's American League. The Red Sox colors
        are Red, Blue,and White. The red sox began in 1901, as one of the original franchises of the American League.
        The Red Sox finished the regular season with a 92-70 record and have advanced to the American League Championship Series and will face the Houston Astros. </p>
      <br />
      <p className='bogaerts'>
        The Red Sox have a talented roster, so it was hard to narrow my selection to two players, but i had two choose the two players who are cornerstone franchise players on the left side of the infield.One of the players
        being Xander Bogaerts.
        Xander Bogaerts is an Major League Baseball shortstop for the Boston Red Sox.
        Bogaerts is a three-time Mlb All-Star; three-time winner of the  Silver Slugger award.
        Xander Bogaerts was signed out of Aruba in 2009.
        Bogaerts has a career .290 BA 141 HR .353 OBP .459 SLG .812 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='devers'>
        The other red sox player I selected was Rafael Devers. Rafael Devers is one of the best hitting third basemans in the mlb.
        Rafael Devers is a one-time Mlb All-Star; 2019 May AL Player of the Month and 2019 Aug 18th AL Player of the Week.
        Rafael Devers was signed in Early August of the year 2013 as a free agent.
        Devers has a career .279 BA 112 HR .338 OBP .509 SLG .847 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Boston
