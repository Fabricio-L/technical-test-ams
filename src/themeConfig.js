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
        light: '#8A3BBF', //#9100ff
        dark: '#321659',
      },
      text: {
        primary: 'rgba(0,0,0,1)',
        secondary: 'rgba(64,64,64,0.8)',
        disabled: 'rgba(64,64,64,0.3)',
      },
      background: {
        paper: '#fff',
        default: '#F2F2F2',
      },
    },
  })

export default theme
