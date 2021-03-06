import React from 'react'
import logo from '../../images/mullins.png'
import logo2 from '../../images/mancini.png'
import '../styles/Baltimore.css'

const Baltimore = () => {
  return (
    <div className='balt'>
      <h1>Baltimore Orioles</h1>
      <p className='orioles'>The Baltimore Orioles are a Major League Baseball team. They are based in Baltimore, MD.
        They are a member of the Eastern Division of Major League Baseball's American League. The Orioles colors
        are Orange, Black,and White. The Orioles were founded in 1894.
        The Baltimore Orioles finished the regular season with a 52-110 record which was tied for the worst record in the mlb.</p>
      <br />
      <p className='mullins'>
        The Orioles roster isnt very good, so it was hard to find current mlb players on the roster that really stuck out to me. One guy had a really strong season, while the other has been on the roster for some time and is still a good player.One of the players
        being Cedric Mullins. After beginning his Mlb career as a switch hitter and struggling mightly, cedric decided to only bat left handed this season and it made a huge difference in his numbers. Before this past season
        Cedric Mullins from 2018-2020 hit .225 BA 7 HR .290 OBP .342 SLG .632 OPS
        Mullins this past season hit .291 BA 30 HR .360 OBP .518 SLG .878 OPS.
        Cedric Mullins is a outfielder.
        Mullins is a one-time Mlb All-Star; finished 4th in 2021 AL hits with 175; finished 2nd in 2021 AL stolen bases with 30.
        Cedric Mullins was drafted in the 13th round by the Baltimore Orioles in the 2015 Mlb draft.
        Mullins has a career .265 37 HR .333 OBP .451 SLG .784 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='mancini'>
        The other orioles player I selected was Trey Mancini. Trey Mancini has been with the Orioles since 2016 and is a solid baseball player.
        Trey Mancini is a 2021 Home Run Derby Winner and 2019 September 22nd AL Player of the Week; finished 6th in 2019 AL extra base hits with 75.
        Trey Mancini is a outfielder/ first baseman.
        Trey Mancini was drafted in the 8th round by the Baltimore Orioles in the 2013 Mlb draft.
        Mancini has a career .271 BA 107 HR .333 OBP .472 SLG .804 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div>
  )
}

export default Baltimore
