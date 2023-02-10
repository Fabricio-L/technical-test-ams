import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => ({
  itemFooterContainenr: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
    borderRadius: '0px 0px 13px 13px',
    '& .MuiTypography-root': {
      marginBottom: '0px',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}))

export default useStyle
