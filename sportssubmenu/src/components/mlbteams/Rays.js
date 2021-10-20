import React from 'react'
import logo from '../../images/franco.png'
import logo2 from '../../images/glasnow.png'
import '../styles/Rays.css'

const Rays = () => {
  return (
    <div className='tb'>
      <h1>Tampa Bay Rays</h1>
      <p className='rays'>The Tampa Bay Rays are a Major League Baseball team. They are based in Tampa Bay,FL.
        They are a member of the Eastern Division of Major League Baseball's American League. The Rays colors
        are Navy Blue, Columbia Blue, Yellow and White. The Rays were founded in 1998.
        The Rays finished the regular season with a 100-62 record and lost to the Boston Red Sox in the American League Division Series.
        The Rays are one of the best teams every season, while having one of the lowest payrolls in baseball every year.
      </p>
      <br />
      <p className='franco'>
        Wander Franco was the youngest player during the MLB season and was the #1 baseball prospect for two years. Tampa Bay knew how good he was and traded away there starting shortstop in the middle of the season so that they could call up the #1 prospect in all of baseball.
        Wander Franco was signed by the Tampa Bay Rays in July of 2017 as an amateur free agent.
        Wander Franco is a shortstop.
        Wander Franco is a one-time Mlb 2019 Futures-Games representative; Finished 9th in AL Triples with 5.
        Franco has a career .288 BA 7 HR .347 OBP .463 SLG .810 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='glasnow'>
        Tyler Glasnow is one of the best young pitchers in the league, unfortunately he has had a couple of arm injuries which has limited his ability to throw alot of innings.
        Tyler Glasnow was drafted in the 5th round by the Pirates in the 2011 MLB draft and was traded on July 31st, 2018 to the Tampa Bay Rays.
        Tyler Glasnow 2019 April AL Pitcher of the Month and was 4th in the AL in Strikeouts during the 2020 season with 91.
        Glasnow has a career 4.04 ERA, 506 strikeouts and a 11.3 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Rays
