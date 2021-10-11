import React from 'react'
import logo from '../../images/Trout.png'
import logo2 from '../../images/ohtani.png'

const Angels = () => {
  return (
    <div>
      <h1>Los Angeles Angels</h1>
      <p className='team'>The Los Angeles Angels of Anaheim are a Major League Baseball team. They are based in Anaheim, California.
        They are a member of the Western Division of Major League Baseball's American League. The Angels colors
        are Red and White. The Angels are also knowns as the Halos. The Angels have been apart of the Major Leagues since 1961.</p>
      <br />
      <p className='players'>
        The Angels having some of the best players in all of Major League Baseball. One of the players
        who is currently on the Los Angeles Angels is Mike Trout.
        Mike Trout is an Major League Baseball center fielder for the Los Angeles Angles.
        Trout is a nine-time Mlb All-Star; three-time American League Most Valuable Player, and is an eight-time winner of the Silver Slugger Award.
        Mike Trout was drafted 25th overall by the Los Angeles Angels in the 2009 Mlb draft.
        Mike Trout has a career .305 BA 310 HR .419 OBP .583 SLG .1.002 OPS.
      </p>
      <img src={logo} alt='trout' />
      <br />
      <p className='players'>
        The other really good player on the Los Angeles Angels is Shohei Ohtani. Shohei Ohtani was signed out of Japan during the 2017 offseason for 3 years earning
        a maximum of $3.5- miilion bonus and guaranteed salary of no more than the league minimum of 545k.
        Ohtani is one in a generation type of player due to the fact that he throws mid 90s-100 on his fastball as well as he can play the outfield and hit.
        Ohtani is currently the favorite to win the American League Most Valuable player after posting a ridiculously good season.
        This past season Ohtani hit 46 homeruns, 100 rbis and stole 26 bases. On the other
        side he had a 3.18 ERA, 156 strikeouts and a 10.8 K/9.
        <img src={logo2} alt='sho' />
      </p>
    </div>
  )
}

export default Angels
