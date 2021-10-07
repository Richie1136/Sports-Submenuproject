import React, { useState, useContext } from 'react'
import sublinks from '../data/Data'

const AppContext = React.createContext()


export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })
  const openSidebar = () => {
    setSidebarOpen(true)
  }
  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(coordinates)
    setSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setSubmenuOpen(false)
  }
  return <AppContext.Provider value={{ sidebarOpen, openSidebar, closeSidebar, submenuOpen, openSubmenu, closeSubmenu, location, page }}>
    {children}
  </AppContext.Provider>
}

export const useAContext = () => {
  return useContext(AppContext)
}