import React from 'react'
import logo from '../../images/polanco.png'
import logo2 from '../../images/buxton.png'
import '../styles/Twins.css'

const Twins = () => {
  return (
    <div className='min'>
      <h1>Minnesota Twins</h1>
      <p className='twins'>The Minnesota Twins are a Major League Baseball team. They are based in Minneapolis ,MN.
        They are a member of the Central Division of Major League Baseball's American League. The Twins colors
        are Twins Navy, Scarlett Red and Kasota Gold. The Twins were founded in 1901.
        The Twins finished the regular season with a 73-89 record.
      </p>
      <br />
      <p className='polanco'>
        Jorge Polanco is a guy who has tremendous from both side of the plate as he is a switch hitter
        Jorge Polanco is a second baseman and shortstop.
        Jorge Polanco was signed by the DSL Twins in May of 2010 which is a low level inside of the Twins organization.
        Jorge Polanco is a one-time Mlb All-Star; Finished 13th in 2019 AL MVP voting; Finished top 10 in the AL in Doubles in 2019 with 40 which ranked 5th & 2021 with 35 which ranked 9th.
        Polanco has a career .276 BA 82 HR .332 OBP .451 SLG .783 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='buxton'>
        Byron Buxton is one of the best all around mlb centerfielders in all of baseball. One of the big issues that is holding buxton back from being even better is that he cant stay healthy.
        Byron Buxton was drafted in the 1st round by the Twins in the 2012 MLB draft.
        Byron Buxton 2017 Al Gold Glove Award winner; 2021 April AL Player of the Month; 2017 AL SB % leader at 96.67 and the active leader at 87.65%.
        Buxton has a career .248 BA 70 HR .299 OBP .461 SLG .761 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Twins
