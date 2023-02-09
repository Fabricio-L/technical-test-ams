import { createTheme } from '@mui/material/styles'

const theme = () =>
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#8D8D8D',
        light: '#EBEBEA',
        dark: '#181818',
      },
      secondary: {
        main: '#6E37A6',
        light: '#8A3BBF',
        dark: '#321659',
      },
    },
  })

export default theme
