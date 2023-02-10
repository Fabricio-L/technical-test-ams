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
  tableContainer: {
    '& thead': {
      backgroundColor: theme.palette.primary.dark,
      color: 'white',
    },
    '& tr:nth-child(even)': {
      backgroundColor: theme.palette.primary.light,
    },
    '& :last-child td, & :last-child th': {
      border: 0,
    },
  },
}))

export default useStyle
