import React from 'react'
import logo from '../../images/garcia.png'
import logo2 from '../../images/falefa.png'
import '../styles/Texas.css'

const Texas = () => {
  return (
    <div className='tex'>
      <h1>Texas Rangers</h1>
      <p className='rangers'>The Texas Rangers are a Major League Baseball team. They are based in Arlington ,TX.
        They are a member of the Western Division of Major League Baseball's American League. The Rangers colors
        are Cardinal Blue, and Red. The Rangers were founded in 1961.
        The Rangers finished the regular season with a 60-102 record. The Texas Rangers are another team that is in rebuilding mode and traded away some of there best players to prepare for the future and get some assets.
      </p>
      <br />
      <p className='garcia'>
        Adolis Garcia will be one of the key players for the rangers future.
        Adolis Garcia is a outfielder.
        Adolis Garcia was signed by the St. Louis Cardinals in February of 2017 as an free agent and then was traded on December 21st, 2019 to the Texas Rangers.
        Adolis Garcia is a one-time Mlb All-Star; 2021 May AL Rookie of the Month & 2021 April 25th AL Player of the Week.
        Garcia has a career .237 BA 31 HR .280 OBP .442 SLG .722 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='falefa'>
        Isiah Kiner-Falefa is one of the most unique players I have ever seen with more then 500 innings played behind the plate, he has also played shortstop, third base and second base in his short career thus far.
        Isiah Kiner-Falefa was drafted in the 4th round by the Rangers in the 2013 MLB draft.
        Isiah Kiner-Falefa 2021 AL leader in singles with 136; 2020 AL Gold Glove winner.
        Falefa has a career .265 BA 16 HR .316 OBP .354 SLG .670 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Texas
