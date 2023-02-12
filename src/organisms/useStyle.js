import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => ({
  cardContainer: {
    width: '100%',
    borderRadius: '13px',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    background: theme.palette.primary.light,
    padding: '1rem',
  },
  tableContainer: {
    '& .MuiTableContainer-root': {
      maxWidth: '600px',
      borderRadius: '13px',
    },
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
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2rem 0rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}))

export default useStyle
