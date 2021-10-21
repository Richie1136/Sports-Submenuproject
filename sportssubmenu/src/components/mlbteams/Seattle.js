import React from 'react'
import logo from '../../images/france.png'
import logo2 from '../../images/haniger.png'
import '../styles/Seattle.css'

const Seattle = () => {
  return (
    <div className='sea'>
      <h1>Seattle Mariners</h1>
      <p className='mariners'>The Seattle Mariners are a Major League Baseball team. They are based in Seattle ,WA.
        They are a member of the Western Division of Major League Baseball's American League. The Mariners colors
        are Navy Blue, Northwest Green, Silver and Red. The Mariners were founded in 1977.
        The Mariners finished the regular season with a 90-72 record, although the mariners missed the playoffs by 2 games many people were shocked by them being that close to making the playoffs while not having much talent.
      </p>
      <br />
      <p className='france'>
        Ty France is a underrated hitter in the american league, one of the reasons for him being underrated is because of the team he plays for. Small market teams do not get the same recognition as big market teams.
        Ty France was drafted in the 34th round by the Padres in the 2015 MLB draft.
        Ty France is a first baseman, second baseman and third baseman.
        Ty France ranked 10th in the AL in BA during the 2021 season with a .291 average.; led the AL in Hit By Pitch with 27.
        France has a career .281 BA 29 HR .353 OBP .440 SLG .793 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='haniger'>
        Mitch Haniger has been known as the best players on the mariners for a few years now, a guy with a ton of power.
        Mitch Haniger was drafted in the 1st round by the Brewers in the 2012 MLB draft and was traded on July 31st, 2014 to the Arizona Diamondbacks, then was traded to the Seattle Mariners on November 23rd, 2016.
        Mitch Haniger is a one-time Mlb All-Star; 2021 July 18th AL Pitcher of the Week.
        Haniger has a career .263 BA 101 HR .339 OBP .481 SLG .820 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Seattle

