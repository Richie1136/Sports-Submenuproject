import React from 'react'
import logo from '../../images/kertel.png'
import logo2 from '../../images/pavin.png'

const Angels = () => {
  return (
    <div>
      <h1 className='franchise'>Arizona Diamondbacks</h1>
      <p className='team'>The Arizona Diamondbacksare a Major League Baseball team. They are based in Phoenix, Arizona.
        They are a member of the Western Division of Major League Baseball's National League. The Diamondbacks colors
        are Sedona Red, Sonoran Sand, Black, Teal and White. The Diamondbacks were established as an expansion team and began play in 1998. The Arizona
        Diamondbacks finished this season with a 52-110 record which was tied for the worst in the league. </p>
      <br />
      <p className='players'>
        The Diamondbacks don't have many good players given the fact of there record this past season but they have some good players . One of the players
        who is on the Arizona Diamondbacks is Ketel Marte.
        Ketel Marte is an Major League Baseball utily player who has played Shortstop, 2nd base, outfield and 3rd base for the Arizona Diamondbacks.
        Marte is a 1-time Mlb All-Star.
        Kertel Marte was signed out of the Dominican Republic as an international free agent about two months before his 17th birthday in 2010. Marte spent a little over 5 years in the
        mariners organization before being traded to the diamondbacks.
        Kertel Marter has a career .287 BA 70 HR .346 .456 .802 OPS.
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
