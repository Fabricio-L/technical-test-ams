import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => ({
  logoIconContainer: {
    '& .MuiSvgIcon-root': {
      display: 'flex',
      fontSize: '1.5rem',
      color: theme.palette.secondary.light,
    },
  },
  logoTitleContainer: {
    '& .MuiTypography-root': {
      fontWeight: 'bold',
    },
  },
  imageContainer: {
    background: 'white',
    borderRadius: '13px',
    padding: '2rem',
    margin: '2rem 0rem',
    '& .MuiCardMedia-root': {
      objectFit: 'contain',
    },
  },
  imageItemContainer: {
    background: 'white',
    padding: '2rem',
    borderRadius: '13px',
    '& .MuiCardMedia-root': {
      objectFit: 'contain',
    },
  },
  brandContainer: {
    '& .MuiTypography-root': {
      fontWeight: 'bold',
      lineHeight: 'unset',
    },
  },
}))

export default useStyle
