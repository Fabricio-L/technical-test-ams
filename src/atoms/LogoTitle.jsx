import useStyle from './useStyle'
import { Box, Typography } from '@mui/material'

const LogoTitle = () => {
  const classes = useStyle()

  return (
    <Box className={classes.logoTitleContainer}>
      <Typography variant="h4" color="primary.dark">
        AMS test
      </Typography>
    </Box>
  )
}

export default LogoTitle
