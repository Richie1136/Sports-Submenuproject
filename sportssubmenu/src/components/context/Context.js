import React, { useState, useContext } from 'react'


import sublinks from '../data/Data'

const AppContext = React.createContext()


export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [section, setSection] = useState({ section: '', links: [] })
  const openSidebar = () => {
    setSidebarOpen(true)
  }
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const openSubmenu = (text, coordinates) => {
    const section = sublinks.find((link) => link.section === text)
    setSection(section)
    setLocation(coordinates)
    setSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setSubmenuOpen(false)
  }
  return <AppContext.Provider value={{ sidebarOpen, openSidebar, closeSidebar, submenuOpen, openSubmenu, closeSubmenu, location, section }}>
    {children}
  </AppContext.Provider>
}

export const useAContext = () => {
  return useContext(AppContext)
}