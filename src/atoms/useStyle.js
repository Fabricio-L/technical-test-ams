import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
  logoIconContainer: {
    '& .MuiSvgIcon-root': {
      display: 'flex',
      fontSize: '4rem',
    },
  },
  imageContainer: {
    padding: '1rem',
    '& .MuiCardMedia-root': {
      objectFit: 'contain',
    },
  },
})

export default useStyle
