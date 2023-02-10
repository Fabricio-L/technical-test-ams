import PropTypes from 'prop-types'
import { TableCell, Typography } from '@mui/material'
import { Fragment } from 'react'

const ProductDescriptionValue = ({ name, value }) => {
  return (
    <Fragment>
      <TableCell>
        <Typography variant="h6" color="text.secondary">
          {name}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1" color="text.secondary">
          {value}
        </Typography>
      </TableCell>
    </Fragment>
  )
}

ProductDescriptionValue.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
}

export default ProductDescriptionValue
