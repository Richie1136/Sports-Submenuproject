import React from 'react'
import { useAContext } from '../context/Context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useAContext()

  const displaySubmenu = (e) => {
    const section = e.target.textContent
    const tempBt = e.target.getBoundingClientRect()
    const center = (tempBt.left + tempBt.right) / 2
    const bottom = tempBt.bottom - 3
    console.log(bottom)
    openSubmenu(section, { center, bottom })
  }
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
        </div>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>Baseball</button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>Basketball</button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>Football</button>
        </li>
      </div>
    </nav>
  )
}

export default Navbar
