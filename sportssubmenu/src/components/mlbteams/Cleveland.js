import React from 'react'
import logo from '../../images/bieber.png'
import logo2 from '../../images/ramirez.png'
import '../styles/Cleveland.css'

const Cleveland = () => {
  return (
    <div className='cle'>
      <h1>Cleveland Guardians</h1>
      <p className='guardians'>The Cleveland Guardians are a Major League Baseball team. They are based in Cleveland, Ohio.
        They are a member of the Central Division of Major League Baseball's American League. The Guardians colors
        are Navy Blue, and Red. The Guardians began in 1901.
        The Guardians finished the regular season with a 80-82 record.</p>
      <br />
      <p className='bieber'>
        The Guardians have lost alot of talent over the last couple of years but they still have two very good players who stand out on the roster.
        One of those players being Shane Bieber.
        Bieber is a two-time Mlb All-Star; one-time Cy Young Award Winner, 2020 AL ERA leader.
        Shane Bieber was drafted in the 4th round of the 2016 Mlb draft by the Indians.
        Bieber has a career 3.29 ERA, 633 strikeouts and a 11.3 K/9.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='ramirez'>
        The second player who is an elite infielder is Jose Ramirez.
        Jose Ramirez has played every position on the field except for 1st base, pitcher and catcher.
        Jose Ramirez is a three-time Mlb All-Star; Three-time winner of the Silver Slugger award, 2017 AL Extra Base Hits leader and 2020 AL Extra Base Hits leader.
        Jose Ramirez was signed by the Cleveland Indians Braves in November of 2009 as an amateur free agent.
        Ramirez has a career .278 BA 163 HR .354 OBP .501 SLG .855 OPS
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Cleveland