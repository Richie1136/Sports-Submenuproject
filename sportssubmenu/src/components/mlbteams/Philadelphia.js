import React from 'react'
import logo from '../../images/harper.png'
import logo2 from '../../images/wheeler.png'
import '../styles/Philadelphia.css'

const Philadelphia = () => {
  return (
    <div className='phi'>
      <h1>Philadelphia Phillies</h1>
      <p className='phillies'>The Philadelphia Phillies are a Major League Baseball team. They are based in Philadelphia,PA.
        They are a member of the Eastern Division of Major League Baseball's National League. The Phillies colors
        are Red, Blue, and White. The Phillies were founded in 1883.
        The Phillies finished the regular season with a 82-80 record.
      </p>
      <br />
      <p className='harper'>
        Bryce Harper is one of the most underrated players in the league, due to his massive contract that he got from the Phillies when he became a free agent, people believed that he didnt deserve the contract. In the 2021 season he put up one of the best seasons of his career hitting over 30 hrs and a .309 BA.
        After being drafted in the 1st round by the Washington Nationals in the 2010 MLB draft, harper was one of the most hyped up prospects.
        Bryce Harper is a outfielder.
        Bryce Harper is a six-time Mlb All-Star; 2015 NL MVP; 2015 NL Silver Slugger Award winner.
        Harper has a career .279 BA 267 HR .392 OBP .524 SLG .916 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='wheeler'>
        Zach Wheeler was one of the best starting pitchers in all of baseball during the 2021 season posting a career low ERA of 2.78.
        Zach Wheeler was drafted in the 1st round by the Giants in the 2009 MLB draft and was traded to the New York Mets on July 28th, 2011.
        Zach Wheeler is a one-time Mlb All-Star; 2021 NL strikeout leader with 247.
        Wheeler has a career 3.51 ERA, 1026 strikeouts and a 8.9 K/9.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Philadelphia
