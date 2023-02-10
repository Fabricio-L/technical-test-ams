import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => ({
  logoIconContainer: {
    '& .MuiSvgIcon-root': {
      display: 'flex',
      fontSize: '4rem',
      color: theme.palette.primary.dark,
    },
  },
  logoTitleContainer: {
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
  },
  imageContainer: {
    padding: '1rem',
    '& .MuiCardMedia-root': {
      objectFit: 'contain',
    },
  },
}))

export default useStyle
