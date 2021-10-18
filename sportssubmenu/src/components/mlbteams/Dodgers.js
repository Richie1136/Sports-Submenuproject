import React from 'react'
import logo from '../../images/scherzer.png'
import logo2 from '../../images/betts.png'
import '../styles/Dodgers.css'

const Dodgers = () => {
  return (
    <div className='lad'>
      <h1>Los Angeles Dodgers</h1>
      <p className='dodgers'>The Los Angeles Dodgers are a Major League Baseball team. They are based in Los Angeles, Ca.
        They are a member of the West Division of Major League Baseball's National League. The Dodgers colors
        are Dodger Blue, and Silver. The Dodgers began in 1958.
        The Dodgers finished the regular season with a 106-56 record. The Dodgers are currently battling the Atlanta Braves in the National League Championship series with the series tied 1-1.
        Dodgers have been one of the better mlb franchises the past 10+ years, continously making the playoffs.
      </p>
      <br />
      <p className='scherzer'>
        Max Scherzer has been amongst the best starting pitchers in the major leagues for 10 years.
        Max Scherzer was drafted 11th overall by the diamondbacks in the 2006 MLB draft.
        Max Scherzer is a eight-time Mlb All-Star; three-time CY Young winner.
        Scherzer has a career 3.16 ERA 3020 strikeouts and a 10.7 K/9.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='betts'>
        One of the other top players on the dodgers roster is Mookie Betts.
        Mookie Betts is a 2nd baseman and outfielder.
        Mookie Betts was drafted in the 5th round by the Red Sox in the 2011 MLB draft.
        Mookie Betts 5-time Mlb All-Star; 2018 American League Most Valuable Player; five-time Gold Glove Winner; four-time Silver Slugger Winner.
        Betts has a career .296 BA 141 HR .373 OBP .518 SLG .890 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Dodgers
