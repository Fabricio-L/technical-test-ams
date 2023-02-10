import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../themeConfig'
import CustomHeader from '../organisms/CustomHeader'

const Home = () => {
  return (
    <ThemeProvider theme={theme(false)}>
      <CssBaseline />
      <CustomHeader />
      <Outlet />
    </ThemeProvider>
  )
}

export default Home
