import React from 'react'
import { useAContext } from '../context/Context'
import { FaBars } from 'react-icons/fa'


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

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  const handleOnClick = (e) => {
    e.preventDefault()
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu} onClick={handleOnClick}>Baseball</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>Basketball</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu} onClick={handleOnClick}>Football</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
