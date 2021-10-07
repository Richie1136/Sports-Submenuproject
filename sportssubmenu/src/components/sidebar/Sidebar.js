import React from 'react'
import sublinks from '../data/Data'
import { Link } from 'react-router-dom'
import { useAContext } from '../context/Context'
import { FaTimes } from 'react-icons/fa'

const Sidebar = () => {
  const { sideBarOpen, closeSidebar } = useAContext()
  return (
    <div className='sidebar'>
      <button className='close-btm' onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className='sidebar-links'>
        {sublinks.map((item, index) => {
          // You add index becasue its a list
          const { links, section } = item
          return <article key={index}>
            <h4>{section}</h4>
            <div className='sidebar-sublinks'>
              {links.map((link, index) => {
                const { url, icons, label } = link
                return <Link to={url} key={index}>
                  {icons}
                  {label}
                </Link>
              })}
            </div>
          </article>
        })}
      </div>
    </div>
  )
}

export default Sidebar
