import React from 'react'
import logo from '../../images/altuve.png'
import logo2 from '../../images/verlander.png'

const Angels = () => {
  return (
    <div className='franchise'>
      <h1>Houston Astros</h1>
      <p className='team'>The Houston Astros are a Major League Baseball team. They are based in Houston, Texas.
        They are a member of the Western Division of Major League Baseball's American League. The Astros colors
        are Navy, Orange, and Light Orange. The team was founded in 1962 and was initially known as the Houston Colt. The Houston
        Astros finished the regular season with a 95-67 record and are currently competing against the Chicago White Sox in the American League Division Series. </p>
      <br />
      <p className='players'>
        The Astros have some really good players on the roster, however i am limiting the amount of players to two. One of the players
        is Jose Altuve. Jose Altuve is the shortest player in all of baseball at 5 foot 6 inches tall, however that hasnt stopped him from having a very good career.
        Jose Altuve is an Major League Baseball 2nd baseman for the Houston Astros.
        Altuve is a sevem-time Mlb All-Star; one-time American League Most Valuable Player, and is an three-time winner of the Silver Slugger Award.
        Mike Trout was drafted 25th overall by the Los Angeles Angels in the 2009 Mlb draft.
        Mike Trout has a career .305 BA 310 HR .419 OBP .583 SLG .1.002 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='player2'>
        The other really good player on the Los Angeles Angels is Shohei Ohtani. Shohei Ohtani was signed out of Japan during the 2017 offseason for 3 years earning
        a maximum of $3.5- miilion bonus and guaranteed salary of no more than the league minimum of 545k.
        Ohtani is one in a generation type of player due to the fact that he throws mid 90s-100 on his fastball as well as he can play the outfield and hit.
        Ohtani is currently the favorite to win the American League Most Valuable player after posting a ridiculously good season.
        This past season Ohtani hit 46 homeruns, 100 rbis and stole 26 bases. On the other
        side he had a 3.18 ERA, 156 strikeouts and a 10.8 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Angels
