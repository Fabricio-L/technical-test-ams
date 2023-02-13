import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
  itemFooterContainenr: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '0px 0px 13px 13px',
    '& .MuiTypography-root': {
      marginBottom: '0px',
    },
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
})

export default useStyle
