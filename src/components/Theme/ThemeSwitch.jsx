import { Moon, Sun } from 'lucide-react'
import GlassSwitch from '../Buttons/GlassSwitch'
import { useTheme } from './ThemeContext'

const ThemeSwitch = () => {
  const { isDark, toggleTheme } = useTheme()
  return (
    <GlassSwitch
      isOn={isDark}
      ariaLabel={`Switch to ${isDark ? 'light ' : 'dark '} mode`}
      content={isDark ? <Sun /> : <Moon />}
      onChange={toggleTheme} />
  )
}

export default ThemeSwitch
