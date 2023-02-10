import SecurityUpdateGoodRoundedIcon from '@mui/icons-material/SecurityUpdateGoodRounded'
import { Box } from '@mui/material'
import useStyle from './useStyle'

const LogoIcon = () => {
  const classes = useStyle()

  return (
    <Box className={classes.logoIconContainer}>
      <SecurityUpdateGoodRoundedIcon />
    </Box>
  )
}

export default LogoIcon
