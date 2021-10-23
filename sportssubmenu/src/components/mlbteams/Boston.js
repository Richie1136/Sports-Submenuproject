import React from 'react'
import logo from '../../images/bogaerts.png'
import logo2 from '../../images/devers.png'
import '../styles/Boston.css'

const Boston = () => {
  return (
    <div className='bos'>
      <h1>Boston Red Sox</h1>
      <p className='redsox'>The Boston Red Sox are a Major League Baseball team. They are based in Boston, MA.
        They are a member of the Eastern Division of Major League Baseball's American League. The Red Sox colors
        are Red, Blue,and White. The red sox were founded in 1901.
        The Red Sox finished the regular season with a 92-70 record and lost in the American League Championship Series to the Houston Astros. </p>
      <br />
      <p className='bogaerts'>
        The Red Sox have a talented roster, so it was hard to narrow my selection to two players, but i had two choose the two players who are cornerstone franchise players on the left side of the infield.One of the players
        being Xander Bogaerts.
        Xander Bogaerts is a shortstop.
        Bogaerts is a three-time Mlb All-Star; three-time Silver Slugger Award winner.
        Xander Bogaerts was signed out of Aruba in 2009.
        Bogaerts has a career .290 BA 141 HR .353 OBP .459 SLG .812 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='devers'>
        The other red sox player I selected was Rafael Devers. Rafael Devers is one of the best hitting third basemans in the mlb.
        Rafael Devers is a one-time Mlb All-Star; 2019 May AL Player of the Month and 2019 August 18th AL Player of the Week.
        Rafael Devers was signed by the Boston Red Sox in August of 2013 as a free agent.
        Devers has a career .279 BA 112 HR .338 OBP .509 SLG .847 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Boston
