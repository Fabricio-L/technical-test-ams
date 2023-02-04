import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { FormGroup, FormControlLabel, Switch } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './themeConfig'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleSwitchTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <CssBaseline />
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={handleSwitchTheme} />}
          label={darkMode ? 'Dark' : 'Light'}
        />
      </FormGroup>
    </ThemeProvider>
  )
}

export default App
