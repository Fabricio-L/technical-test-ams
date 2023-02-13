import PropTypes from 'prop-types'
import { TableRow } from '@mui/material'
import ProductDescriptionValue from '../atoms/ProductDescriptionValue'

const DescriptionBody = ({ name, value }) => {
  return (
    <TableRow>
      <ProductDescriptionValue name={name} value={value} />
    </TableRow>
  )
}

DescriptionBody.propTypes = {
  name: PropTypes.any,
  value: PropTypes.any,
}

export default DescriptionBody
