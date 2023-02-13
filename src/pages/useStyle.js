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
    gap: '3rem',
    margin: '4rem 0rem',
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '4rem 0rem',
    padding: '2rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      margin: '1rem 0rem',
    },
  },
}))

export default useStyle
