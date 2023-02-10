import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
  showcaseContainer: {
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
})

export default useStyle
