import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeContext from './components/Theme/ThemeContext.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/next"

createRoot(document.getElementById('root')).render(
  <ThemeContext>
    <BrowserRouter>
      <App />
     <SpeedInsights />
     <Analytics />
    </BrowserRouter>
  </ThemeContext>
)
