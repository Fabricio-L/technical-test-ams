import PropTypes from 'prop-types'
import useStyle from './useStyle'
import { Box, CardMedia } from '@mui/material'

const ItemImage = ({ img, alt }) => {
  const classes = useStyle()

  return (
    <Box className={classes.imageItemContainer}>
      <CardMedia component="img" height="240" image={img} alt={alt} />
    </Box>
  )
}

ItemImage.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
}

export default ItemImage
