import React from 'react'
import logo from '../../images/abreu.png'
import logo2 from '../../images/rodon.png'
import '../styles/Whitesox.css'

const Whitesox = () => {
  return (
    <div className='chw'>
      <h1>Chicago White Sox </h1>
      <p className='whitesox'>The Chicago White Sox are a Major League Baseball team. They are based in Chicago, Illinois.
        They are a member of the Central Division of Major League Baseball's American League. The White Sox colors
        are Black and Silver. The White Sox were founded in 1894.
        The White Sox finished the regular season with a 93-69 record and lost to the Astros in the American League Division Series.
      </p>
      <br />
      <p className='abreu'>
        Jose Abreu has been one of the best hitters for the white sox his whole career.
        Jose Abreu is a first baseman.
        Jose Abreu was signed by the Twins in October of 2013 as an amateur free agent.
        Jose Abreu is a three-time Mlb All-Star; 2020 Al MVP; three-time Silver Slugger winner; two-time RBI leader for the AL in 2019 with 123 & 2020 with 60.
        Abreu has a career .290 BA 228 HR .350 OBP .515 SLG .865 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='rodon'>
        Carlos Rodon has been one of the longest tenured white sox. Rodon had his best pitching season during the 2021 season posting career lows in ERA, career high in strikeouts and career high in K/9.
        Carlos Rodon was drafted in the 1st round by the White Sox in the 2014 MLB draft.
        Rodon is a one-time All-Star; 2021 April 18th AL Player of the Week.
        Rodon has a career 3.79 ERA 710 strikeouts and a 9.5 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Whitesox
