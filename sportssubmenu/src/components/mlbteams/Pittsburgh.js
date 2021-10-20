import React from 'react'
import logo from '../../images/reynolds.png'
import logo2 from '../../images/stallings.png'
import '../styles/Pittsburgh.css'

const Pittsburgh = () => {
  return (
    <div className='pit'>
      <h1>Pittsburgh Pirates</h1>
      <p className='pirates'>The Pittsburgh Pirates are a Major League Baseball team. They are based in Pittsburgh,PA.
        They are a member of the Central Division of Major League Baseball's National League. The Pirates colors
        are Black, and Gold. The Pirates were founded in 1887.
        The Pirates finished the regular season with a 61-101 record.
      </p>
      <br />
      <p className='reynolds'>
        Bryan Reynolds is a solid player for the pirates organzation and will be a key piece for the franchise moving forward.
        Bryan Reynolds was drafted in the 2nd round by the Giants in the 2016 MLB draft and was traded to the Pirates on January 15th, 2018
        Bryan Reynolds is a outfielder.
        Bryan Reynolds is a one-time Mlb All-Star; 2021 NL Triples leader with 8.
        Reynolds has a career .290 BA 47 HR .368 OBP .490 SLG .858 OPS.
      </p>
      <img className='img1' src={logo} alt='img1' />
      <br />
      <p className='stallings'>
        Jacob Stallings is one of the defensive catchers in all of baseball, as well as being one of the best hitting catchers.
        Jacob Stallings was drafted in the 7th round by the Pirates in the 2012 MLB draft.
        Jacob Stallings 2020 NL leader in Caught Stealing as a C; finished 2nd in Defensive WAR for the 2021 NL.
        Stallings has a career .254 BA 17 HR .331 OBP .370 SLG .701 OPS.
        <img className='img2' src={logo2} alt='img2' />
      </p>
    </div >
  )
}

export default Pittsburgh
