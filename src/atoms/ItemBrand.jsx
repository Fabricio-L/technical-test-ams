import PropTypes from 'prop-types'
import useStyle from './useStyle'
import { Box, Typography } from '@mui/material'

const ItemBrand = ({ brand, model }) => {
  const classes = useStyle()

  return (
    <Box className={classes.brandContainer}>
      <Typography color="text.primary">{brand}</Typography>
      <Typography color="text.primary">{model}</Typography>
    </Box>
  )
}

ItemBrand.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
}

export default ItemBrand
