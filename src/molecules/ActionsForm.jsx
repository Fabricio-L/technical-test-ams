import PropTypes from 'prop-types'
import { FormControl, InputLabel } from '@mui/material'
import ActionSelect from '../atoms/ActionSelect'

const ActionsForm = ({ name, actions }) => {
  return (
    <FormControl
      sx={{ m: 1, minWidth: '30%' }}
      size="small"
      style={{ margin: '1rem 0rem' }}
    >
      <InputLabel id={`${name}-select-label`}>{name}</InputLabel>
      <ActionSelect name={name} actions={actions} />
    </FormControl>
  )
}

ActionsForm.propTypes = {
  name: PropTypes.string,
  actions: PropTypes.array,
}

export default ActionsForm
