import PropTypes from 'prop-types'
import { Box, CardActionArea } from '@mui/material'
import useStyle from './useStyle'
import ItemImage from '../atoms/ItemImage'
import ItemFooter from '../molecules/ItemFooter'
import ItemLink from '../atoms/ItemLink'

const CustomCard = ({ product }) => {
  const classes = useStyle()

  return (
    <Box sx={{ maxWidth: 320 }} className={classes.cardContainer}>
      <CardActionArea>
        <ItemLink id={product.id} model={product.model}>
          <ItemImage img={product.imgUrl} alt={product.model} />
          <ItemFooter
            price={product.price}
            brand={product.brand}
            model={product.model}
          />
        </ItemLink>
      </CardActionArea>
    </Box>
  )
}

CustomCard.propTypes = {
  product: PropTypes.object,
}

export default CustomCard
