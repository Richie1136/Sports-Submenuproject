import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAContext } from '../context/Context'

const Submenu = () => {
  const { submenuOpen, location, section: { section, links } } = useAContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])
  return (

    <div>
      <h3>Submenu</h3>
    </div>
  )
}

export default Submenu
