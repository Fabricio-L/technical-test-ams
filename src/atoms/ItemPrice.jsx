import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const ItemPrice = ({ price }) => {
  return (
    <Typography gutterBottom variant="h5" component="div">
      €{price}
    </Typography>
  )
}

ItemPrice.propTypes = {
  price: PropTypes.string,
}

export default ItemPrice
