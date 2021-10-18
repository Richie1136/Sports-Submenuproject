import React from 'react'
import logo from '../../images/perez.png'
import logo2 from '../../images/merrifield.png'
import '../styles/Kansascity.css'

const KansasCity = () => {
  return (
    <div className='kc'>
      <h1>Kansas City Royals</h1>
      <p className='royals'>The Kansas City Royals are a Major League Baseball team. They are based in Kansas City, MO.
        They are a member of the Central Division of Major League Baseball's American League. The Royals colors
        are Royal Blue, and Gold. The Royals were founded in 1969.
        The Royals finished the regular season with a 74-88 record.</p>
      <br />
      <p className='perez'>
        Salvador Perez was the best mlb catcher for the 2021 season, blasting a career high 41 homeruns and 121 RBIs.
        Salvador Perez was signed by the Royals for $65,000 when he was 16 years old. His minor league career began in 2007.
        Salvador Perez is a seven-time Mlb All-Star; five-time Gold Glove Winner; four-time Silver Slugger Winner.
        Perez has a career .270 BA 200 HR .302 OBP .463 SLG .765 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='merrifield'>
        Whit Merrifield is a 2nd baseman and outfielder.
        Whit Merrifield was drafted in the 9th round by the Royals in the 2010 MLB draft.
        Whit Merrifled is a two-time Mlb All-Star; two-time AL Hits leader; two-time AL Stolen Bases leader; 2021 AL Doubles leader.
        Merrifield has a career .291 BA 68 HR .337 OBP .434 SLG .771 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default KansasCity
