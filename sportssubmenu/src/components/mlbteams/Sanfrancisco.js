import React from 'react'
import logo from '../../images/tatis.png'
import logo2 from '../../images/machado.png'
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
      <p className='tatis'>
        Fernando Tatis Jr. is one of, if not the most entertaining baseball player to watch.
        Fernando Tatis Jr. was signed by the Chicago White Sox in July of 2015 as an amateur free agent and was then traded to the San Diego Padres on June 4th, 2016, in a trade that might go down as the worst trade ever. Tatis had a ton of hype around him while he was going through the minor league system.
        Fernando Tatis Jr. is a shortstop and outfielder.
        Fernando Tatis Jr. is a one-time Mlb All-Star; 2020 NL SS Silver Slugger award winner; 2021 NL Homerun leader.
        Tatis Jr. has a career .292 BA 81 HR .369 OBP .596 SLG .965 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='machado'>
        Manny Machado is a excellent all around baseball player and one of the best players who plays on the left side of the infield in the national league.
        Manny Machado was drafted in the 1st round by the Orioles in the 2010 MLB draft and was traded on July 18th, 2018 to the Los Angeles Dodgers and was signed as a free agent by the San Diego Padres on February 21st,2019.
        Manny Machado is a shortstop and 3rd baseman.
        Manny Machado is a five-time Mlb All-Star; 2013 & 2015 AL Gold Glove winner; 2020 NL 3B Silver Slugger award winner.
        Machado has a career .280 BA 251 HR .338 OBP .488 SLG .826 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Sanfrancisco
