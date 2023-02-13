import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(theme => ({
  cardContainer: {
    width: '100%',
    borderRadius: '13px',
    background: theme.palette.background.paper,
    '& .MuiButtonBase-root:hover': {
      borderRadius: '13px',
      boxShadow: '0px 0px 9px 0px #646464',
    },
    '& .MuiButtonBase-root:focus': {
      borderRadius: '13px',
    },
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'black',
    padding: '1rem',
  },
  headerSub: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  tableContainer: {
    '& .MuiTableContainer-root': {
      maxWidth: '600px',
      borderRadius: '3px',
    },
    '& thead': {
      backgroundColor: theme.palette.primary.dark,
      color: 'white',
    },
    '& tr:nth-child(even)': {
      backgroundColor: theme.palette.background.paper,
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
