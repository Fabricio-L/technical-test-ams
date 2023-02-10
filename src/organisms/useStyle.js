import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => ({
  cardContainer: {
    width: '100%',
    borderRadius: '13px',
  },
  headerContainer: {
    background: theme.palette.primary.light,
    padding: '1rem',
  },
}))

export default useStyle
