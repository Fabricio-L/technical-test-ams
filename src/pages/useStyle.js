import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => ({
  mainContainer: {
    maxWidth: '1200px',
    margin: 'auto',
  },
  showcase: {
    display: 'grid',
    justifyItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '1rem',
    margin: '1rem',
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}))

export default useStyle
