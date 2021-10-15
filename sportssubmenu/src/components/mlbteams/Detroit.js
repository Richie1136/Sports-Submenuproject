import React from 'react'
import logo from '../../images/candelario.png'
import logo2 from '../../images/mize.png'
import '../styles/Detroit.css'

const Detroit = () => {
  return (
    <div className='det'>
      <h1>Detroit Tigers</h1>
      <p className='tigers'>The Detroit Tigers are a Major League Baseball team. They are based in Detroit, Michigan.
        They are a member of the Central Division of Major League Baseball's American League. The Tigers colors
        are Navy, and Orange. The Tigers began in 1901.
        The Detroit Tigers are the oldest American League baseball team to have only one home city and one name in their history. Beginning in 1894, the Tigers played at Boulevard Park as a charter member in the Western League.
        The Tigers finished the regular season with a 77-85 record. Although the tigers finished 8 games below .500 the future is extremely bright for this organization.</p>
      <br />
      <p className='candelario'>
        Jeimer Candelario is one of the longest tenure tigers and has been a solid player for years, and this best season being his best.
        Jeimer Candelario is a 1st and 3rd baseman.
        Jeimer Candelario was signed by the Cubs in November of 2010 as a free agent.
        Candelario won 2020 September 13th AL Player of the Week winner and 2021 AL Doubles leader.
        Candelario has a career .246 BA 53 HR .334 OBP .410 SLG .744 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='mize'>
        Casey Mize was the best pitcher of the tigers this past season and is projected to be the ace of the future for the tigers. After being selected #1 overall in the 2018 MLB draft and dominating the minor leagues, alot of hype was surrounding him.
        Casey Mize threw one complete game.
        Mize pitching numbers this past season 3.71 ERA 118 strikeouts and a 7.1 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Detroit
