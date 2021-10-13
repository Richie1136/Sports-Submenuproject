import React from 'react'
import logo from '../../images/altuve.png'
import logo2 from '../../images/verlander.png'
import '../styles/Astros.css'

const Astros = () => {
  return (
    <div className='hou'>
      <h1>Houston Astros</h1>
      <p className='astros'>The Houston Astros are a Major League Baseball team. They are based in Houston, Texas.
        They are a member of the Western Division of Major League Baseball's American League. The Astros colors
        are Navy, Orange, and Light Orange. The team was founded in 1962 and was initially known as the Houston Colt. The Houston
        Astros finished the regular season with a 95-67 record and have advanced to the American League Championship Series and will face the Boston Red Sox. </p>
      <br />
      <p className='altuve'>
        The Astros have some really good players on the roster, however i am limiting the amount of players to two. One of the players
        is Jose Altuve. Jose Altuve is the shortest player in all of baseball at 5 foot 6 inches tall, however that hasnt stopped him from having a very good career.
        Jose Altuve is an Major League Baseball 2nd baseman for the Houston Astros.
        Altuve is a seven-time Mlb All-Star; one-time American League Most Valuable Player, and is an five-time winner of the Silver Slugger Award.
        Jose Altuve was signed by the Houston Astros in March of 2007 as an amateur free agent.
        Jose Altuve has a career .308 BA 164 HR .360 OBP .462 SLG .821 OPS
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='verlander'>
        Another outstanding player on the Houston Astros is Justin Verlander. Justin Verlander was unable to pitch this year due to Tommy John Surgery, which is an elbow injury that causes pitchers to miss about a year and a half of time. Tommy John is especially rough
        for pitchers because it is a major surgery and requires alot of miss time and recovery to hopefully get back to where you were before you need TJS.
        Justin Verlander is a eight-time Mlb All-Star; two-time American League CY Young winner and a one-time American League Most Value Player.
        Justin Verlander was drafted 2nd overall by the Detroit Tigers in the 2004 Mlb draft and was later traded to the Houston Astros on August 31, 2017.
        Mike Trout was drafted 25th overall by the Los Angeles Angels in the 2009 Mlb draft.
        Verlander has a career 3.33 ERA, 3013 strikeouts and a 9.1 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Astros
