import React from 'react'
import { useAContext } from '../context/Context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useAContext()

  const displaySubmenu = (e) => {
    const section = e.target.textContent
    const tempBt = e.target.getBoundingClientRect()
    const center = (tempBt.left + tempBt.right) / 2
    const bottom = tempBt.bottom - 3
  }
  return (
    <div>
      <h2>Nav component</h2>
    </div>
  )
}

export default Navbar
