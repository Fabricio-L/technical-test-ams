import { createTheme } from '@mui/material/styles'

const theme = () =>
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#8C8C8C',
        light: '#F2F2F2',
        dark: '#404040',
      },
      secondary: {
        main: '#6E37A6',
        light: '#8A3BBF',
        dark: '#321659',
      },
    },
  })

export default theme
