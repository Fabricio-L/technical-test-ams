import PropTypes from 'prop-types'
import { TableCell, Typography } from '@mui/material'

const ProductDescriptionTitle = ({ name }) => {
  return (
    <TableCell>
      <Typography variant="h6" color="text.secondary">
        {name}
      </Typography>
    </TableCell>
  )
}

ProductDescriptionTitle.propTypes = {
  name: PropTypes.string,
}

export default ProductDescriptionTitle