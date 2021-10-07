import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAContext } from '../context/Context'

const Submenu = () => {
  const { submenuOpen, location, page: { page, links } } = useAContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

    if (links.length === 3) {
      setColumns('col-3')
    } else if (links.length > 3) {
      setColumns('col-4')
    }
  }, [location, links])
  return (
    <div className='submenu-show'>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, icons, label } = link
          return <Link to={url} key={index}>
            {icons}
            {label}
          </Link>
        })}
      </div>
    </div>
  )
}

export default Submenu
