import PropTypes from 'prop-types'
import { Card, CardActionArea } from '@mui/material'
import useStyle from './useStyle'
import ItemImage from '../atoms/ItemImage'
import ItemFooter from '../molecules/ItemFooter'

const CustomCard = ({ product }) => {
  const classes = useStyle()

  return (
    <Card sx={{ maxWidth: 320 }} className={classes.cardContainer}>
      <CardActionArea>
        <ItemImage img={product.imgUrl} alt={product.model} />
        <ItemFooter
          price={product.price}
          brand={product.brand}
          model={product.model}
        />
      </CardActionArea>
    </Card>
  )
}

CustomCard.propTypes = {
  product: PropTypes.object,
}

export default CustomCard
