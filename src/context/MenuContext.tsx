'use client'
import { useState, createContext, ReactNode } from 'react'

interface MenuContextType {
  open: boolean
  handleToggleMenu: () => void
}

export const MenuContext = createContext({} as MenuContextType)

interface MenuContextProviderProps {
  children: ReactNode
}

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [open, setOpen] = useState(false)

  function handleToggleMenu() {
    setOpen((state) => !state)
  }

  return (
    <MenuContext.Provider value={{ open, handleToggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
