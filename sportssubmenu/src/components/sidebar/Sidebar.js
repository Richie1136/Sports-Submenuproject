import React from 'react'
import sublinks from '../data/Data'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar-links'>
      {sublinks.map((item, index) => {
        // You add index becasue its a list
        const { links, page } = item
        return <article key={index}>
          <h4>{page}</h4>
          <div className='sidebar-sublinks'>
            {links.map((link, index) => {
              const { url, icon, label } = link
              return <Link key={index} href={url}>
                {icon}
                {label}
              </Link>
            })}
          </div>
        </article>
      })}
    </div>
  )
}

export default Sidebar
