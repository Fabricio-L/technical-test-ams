import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => ({
  itemFooterContainenr: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.light,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}))

export default useStyle
