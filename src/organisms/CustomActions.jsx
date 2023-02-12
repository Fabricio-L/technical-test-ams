import PropTypes from 'prop-types'
import useStyle from './useStyle'
import { Box } from '@mui/material'
import ActionsForm from '../molecules/ActionsForm'
import ActionButton from '../atoms/ActionButton'

const CustomActions = ({ options }) => {
  const classes = useStyle()

  return (
    <Box className={classes.actionsContainer}>
      {options &&
        Object.keys(options).map((option, i) => (
          <ActionsForm key={i} name={option} actions={options[option]} />
        ))}
      <ActionButton name={'Añadir'} />
    </Box>
  )
}

CustomActions.propTypes = {
  options: PropTypes.object,
}

export default CustomActions
