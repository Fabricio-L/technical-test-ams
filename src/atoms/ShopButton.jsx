import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import useStyle from './useStyle'
import IconButton from '@mui/material/IconButton'
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded'

const ShopButton = () => {
  const classes = useStyle()
  const count = useContext(CartContext)

  return (
    <IconButton
      className={classes.logoIconContainer}
      aria-label="add to shopping cart"
      size="small"
      variant="outlined"
    >
      <LocalGroceryStoreRoundedIcon size="sm" />
      <span style={{ color: 'white' }}>{count.count}</span>
    </IconButton>
  )
}

export default ShopButton
