import useStyle from './useStyle'
import IconButton from '@mui/material/IconButton'
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded'

const ShopButton = () => {
  const classes = useStyle()

  return (
    <IconButton
      className={classes.logoIconContainer}
      aria-label="add to shopping cart"
      size="large"
    >
      <LocalGroceryStoreRoundedIcon size="large" />
    </IconButton>
  )
}

export default ShopButton
