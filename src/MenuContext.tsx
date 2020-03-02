import React from 'react'

export const MenuContext = React.createContext<{
  isMenuOpen: boolean
  setMenuOpen: any
}>({
  isMenuOpen: false,
  setMenuOpen: null
})
