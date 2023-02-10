import PropTypes from 'prop-types'
import useStyle from './useStyle'
import { Box, CardMedia } from '@mui/material'

const ProductImage = ({ img, alt }) => {
  const classes = useStyle()

  return (
    <Box className={classes.imageContainer}>
      <CardMedia component="img" image={img} alt={alt} />
    </Box>
  )
}

ProductImage.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
}

export default ProductImage
