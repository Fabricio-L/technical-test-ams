import PropTypes from 'prop-types'
import useStyle from './useStyle'
import { CardContent } from '@mui/material'
import ItemBrand from '../atoms/ItemBrand'
import ItemPrice from '../atoms/ItemPrice'

const ItemFooter = ({ price, brand, model }) => {
  const classes = useStyle()

  return (
    <CardContent className={classes.itemFooterContainenr}>
      <ItemBrand brand={brand} model={model} />
      <ItemPrice price={price} />
    </CardContent>
  )
}

ItemFooter.propTypes = {
  price: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
}

export default ItemFooter
