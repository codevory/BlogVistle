import { useState, useContext, createContext, useEffect } from 'react'

const themeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [isDark, setisDark] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  //save to body & localstorage
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", isDark)
    root.classList.toggle("light", !isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  //theme toggle function
  function toggleTheme() {
    setisDark(prev => !prev)
  }

  //return main function component
  return (
    <div>
      <themeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
      </themeContext.Provider>
    </div>
  )
}

export default ThemeProvider

export const useTheme = () => useContext(themeContext)