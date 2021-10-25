import React from 'react'
import logo from '../../images/crawford.png'
import logo2 from '../../images/gausman.png'
import '../styles/Sanfrancisco.css'

const Sanfrancisco = () => {
  return (
    <div className='sf'>
      <h1>San Francisco Giants</h1>
      <p className='giants'>The San Francisco Giants are a Major League Baseball team. They are based in San Francisco ,CA.
        They are a member of the Western Division of Major League Baseball's National League. The Giants colors
        are Orange, Black and Beige. The Giants were founded in 1883.
        The Giants finished the regular season with a 107-55 record and lost in the National League Division series to the Los Angeles Dodgers.

      </p>
      <br />
      <p className='crawford'>
        Brandon Crawford had his best offensive season of his career during the 2021 season hitting .298 BA 24 HR .373 OBP .522 SLG and .895 OPS.
        Brandon Crawford was drafted in the 4th round by the Giants in the 2008 MLB draft.
        Brandon Crawford is a shortstop.
        Brandon Crawford is a three-time Mlb All-Star; 2015 NL SS Silver Slugger Award winner; 2015, 2016 & 2017 NL Gold Glove Award winner.
        Crawford has a career .254 BA 130 HR .322 OBP .405 SLG .727 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='gausman'>
        Kevin Gausman had his best pitching season of his career during the 2021 season pitching to a 2.81 ERA, 227 strikeouts and a 10.6 K/9.
        Kevin Gausman was drafted in the 1st round by the Orioles in the 2012 MLB draft and was traded on July 31st, 2018 to the Atlanta Braves, then was claimed off of waivers by the Cincinnati Reds on August 5th,2019 and then signed with the San Francisco Giants as a free agent on December 10th,2019.
        Kevin Gausman is a one-time Mlb All-Star; 2021 May NL Pitcher of the Month.
        Gausman has a career 4.02 ERA, 1161 strikeouts and a 8.9 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Sanfrancisco
