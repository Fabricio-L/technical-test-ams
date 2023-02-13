import { Box } from '@mui/material'
import LogoIcon from '../atoms/LogoIcon'
import LogoLink from '../atoms/LogoLink'
import LogoTitle from '../atoms/LogoTitle'
import useStyle from './useStyle'

const Logo = () => {
  const classes = useStyle()

  return (
    <LogoLink>
      <Box className={classes.logoContainer}>
        <LogoIcon />
        <LogoTitle />
      </Box>
    </LogoLink>
  )
}

export default Logo
