import React from 'react'
import logo from '../../images/alcantara.png'
import logo2 from '../../images/rogers.png'
import '../styles/Miami.css'

const Miami = () => {
  return (
    <div className='mia'>
      <h1>Miami Marlins</h1>
      <p className='marlins'>The Miami Marlins are a Major League Baseball team. They are based in Miami, FL.
        They are a member of the Eastern Division of Major League Baseball's National League. The Marlins colors
        are Miami Blue, Caliente Red, Slate Gray, and Midnight Black. The Mets were founded in 1991.
        The Marlins finished the regular season with a 67-95 record. The Marlins are in the rebuilding stages and have been playing alot of young guys to get them experience.
        These two pitchers will be key for the Marlins going forward.
      </p>
      <br />
      <p className='alcantara'>
        Sandy Alcantara is one of the most underrated pitchers in all of baseball, one of the reasons why he is underrated is because hes on a bad team that no one wants to watch.
        Sandy Alcantara was signed by the St.Louis Cardinals on July 2nd, 2013 as a free agent and was later traded to the Miami Marlins on December 14th, 2017.
        Sandy Alcantara is a one-time Mlb All-Star; 2019 NL leader in Complete Games and Shutouts.
        Alcantara has a career 3.49 ERA 431 strikeouts and a 8.0 K/9.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='rogers'>
        Trevor Rogers was one of the best rookie pitchers during the 2021 MLB season.
        Trevor Rogers was drafted in the 1st round by the Marlins in the 2017 MLB draft.
        Trevor Rogers is a one-time Mlb All-Star; 2021 April NL Rookie of the Month and 2021 May NL Rookie of the Month.
        Rogers has a career 3.24 ERA 196 strikeouts and a 11.0 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Miami
