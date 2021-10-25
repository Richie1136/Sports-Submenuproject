import React from 'react'
import logo from '../../images/aleast.png'
import logo2 from '../../images/alc.png'
import logo3 from '../../images/alwest.png'
import logo4 from '../../images/nleast.png'
import logo5 from '../../images/nlc.png'
import logo6 from '../../images/nlwest.png'
import '../styles/Mlb.css'

const Mlb = () => {
  return (
    <div className='mlb'>
      <h1>MLB</h1>
      <p className='league'>The MLB is a professional baseball organization and the oldest major professional sports league in the world. As of 2021, a total of 30 teams play in the MLB- 15 teams in the National League(NL) and 15 in the American League(AL)- with 29 in the United States and 1 in Canada.
        The MLB was founded in 1903 by the National Association of Baseball Players.
        The MLB colors are Blue, and Red. Every division consists of 5 teams, The teams are aligned as followed;
      </p>
      <br />
      <p className='ale'>
        The American League East is one of six divisions in the Major League Baseball. The division was created before the start of the 1969 season along with the American League West division.
        The New York Yankees hold the most titles from this division with 19 and the Tampa Bay Rays hold the most recent division championship for 2021.
        The five best players from the AL East are Aaron Judge, Gerrit Cole, Giancarlo Stanton, Rafael Devers and Vladimir Guerrero Jr.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='alc'>
        The American League Central is one of six divisions in the Major League Baseball. The division was formed in the realignment of 1994, and its teams are all located in the Midwest of the United States.
        The Cleveland Indians hold the most titles from this division with 10 and the Chicago White Sox hold the most recent division championship for 2021.
        The five best players from the AL Central are Salvador Perez, Jose Abreu, Jorge Polanco, Lucas Giolito and Carlos Rodon.
        <img className='img2' src={logo2} alt='img2' />
        <br />
      </p>
      <p className='alw'>
        The American League West is one of six divisions in  Major League Baseball and is the last division in the American League. The AL West division was founded in 1969.The division has five teams since the 2013 season, but had four teams from 1994 to 2012.
        The Oakland Athletics hold the most titles from this division with 17 and the Houston Astros hold the most recent division championship for 2021.
        The five best players from the AL West are Mike Trout, Alex Bregman, Shohei Ohtani, Anthony Rendon and Justin Verlander.
        <img className='img3' src={logo3} alt='img3' />
        <br />
      </p>
      <p className='nle'>
        The National League East is one of six divisions in  Major League Baseball. The NL East division was founded in 1969.Along with the American League Central it is one of two divisions to have every member win at least one World Series title.
        The Atlanta Braves hold the most titles from this division with 16 and the Atlanta Braves hold the most recent division championship for 2021.
        The five best players from the NL East are Jacob deGrom, Bryce Harper, Ronald Acuna Jr, Austin Riley and Juan Soto.
        <img className='img4' src={logo4} alt='img4' />
        <br />
      </p>
      <p className='nlc'>
        The National League Central is one of six divisions in  Major League Baseball. The NL Central division was created in 1994, by moving two teams from the National League West and three teams from the National League East.
        The St.Louis Cardinals hold the most titles from this division with 11 and the Milwaukee Brewers hold the most recent division championship for 2021.
        The five best players from the NL Central are Corbin Burnes, Josh Hader, Nolan Arenado, Paul Goldschmidt, and Brandon Woodruff.
        <img className='img5' src={logo5} alt='img5' />
        <br />
      </p>
      <p className='nlw'>
        The National League West is one of six divisions in  Major League Baseball and is the last division in the National League. The NL West division was founded in 1969.
        The Los Angeles Dodgers hold the most titles from this division with 19 and the San Francisco Giants hold the most recent division championship for 2021.
        The five best players from the NL West are Max Scherzer, Trea Turner, Mookie Betts, Walker Buehler, Brandon Crawford, and Fernando Tatis Jr.
        <img className='img6' src={logo6} alt='img6' />
        <br />
      </p>
    </div>
  )
}

export default Mlb
