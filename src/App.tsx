import React, { Fragment, useState } from 'react'

import GlobalStyles from 'global/styles'
import { Header } from 'components'
import { ThemeProvider } from 'styled-components'
import themeStyles from 'global/theme'
import { useTheme } from 'hooks'

function App() {

  const { theme, setTheme } = useTheme()
  
  const [query, setQuery] = useState("selly361")

  const currentThemeStyles = themeStyles[theme]


  const toggleTheme = () => setTheme(theme == "light" ? "dark" : "light")
  
  
  
  
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={currentThemeStyles}>
        <Header toggleTheme={toggleTheme} icon={currentThemeStyles.icon} />
      </ThemeProvider>
    </Fragment>
  )
}

export default App