import PropTypes from 'prop-types'
import { TableBody, TableRow } from '@mui/material'
import ProductDescriptionValue from '../atoms/ProductDescriptionValue'

const DescriptionBody = ({ name, value }) => {
  return (
    <TableBody>
      <TableRow>
        <ProductDescriptionValue name={name} value={value} />
      </TableRow>
    </TableBody>
  )
}

DescriptionBody.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
}

export default DescriptionBody
