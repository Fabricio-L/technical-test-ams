import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../themeConfig'
import CustomHeader from '../organisms/CustomHeader'

const Home = () => {
  const navigate = useNavigate()
  const loc = useLocation()

  useEffect(() => {
    if (loc.pathname === '/products' || loc.pathname === '/')
      navigate('/products', { replace: true })
  }, [])

  return (
    <ThemeProvider theme={theme(false)}>
      <CssBaseline />
      <CustomHeader />
      <Outlet />
    </ThemeProvider>
  )
}

export default Home
