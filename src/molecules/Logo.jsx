import { Box } from '@mui/material'
import LogoIcon from '../atoms/LogoIcon'
import LogoTitle from '../atoms/LogoTitle'
import useStyle from './useStyle'

const Logo = () => {
  const classes = useStyle()

  return (
    <Box className={classes.logoContainer}>
      <LogoIcon />
      <LogoTitle />
    </Box>
  )
}

export default Logo
