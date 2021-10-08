import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from '../data/Data'
import { useAContext } from '../context/Context'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const { sideBarOpen, closeSidebar } = useAContext()
  return (
    <aside className={`${sideBarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            // You add index becasue its a list
            const { links, page } = item
            return <article key={index}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map((link, index) => {
                  const { url, label, icons } = link
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
    </aside>
  )
}

export default Sidebar