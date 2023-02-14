import React, { useState } from 'react'

import themeStyles from 'global/theme'
import { useTheme } from 'hooks'

function App() {

  const { theme, setTheme } = useTheme()
  
  const [query, setQuery] = useState("selly361")

  const currentThemeStyles = themeStyles[theme]


  const toggleTheme = () => setTheme(theme == "light" ? "dark" : "light")
  
  
  
  
  return (
    null
  )
}

export default App