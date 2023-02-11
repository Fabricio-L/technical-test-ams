import PropTypes from 'prop-types'
import { TableCell, Typography } from '@mui/material'

const ProductDescriptionTitle = ({ name }) => {
  return (
    <TableCell>
      <Typography variant="body1" color="white">
        {name}
      </Typography>
    </TableCell>
  )
}

ProductDescriptionTitle.propTypes = {
  name: PropTypes.string,
}

export default ProductDescriptionTitle
