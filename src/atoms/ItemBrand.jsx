import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

const ItemBrand = ({ brand, model }) => {
  return (
    <Box>
      <Typography variant="body2" color="text.secondary">
        {brand}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {model}
      </Typography>
    </Box>
  )
}

ItemBrand.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
}

export default ItemBrand
