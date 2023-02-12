import PropTypes from 'prop-types'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'
import { Button } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartProvider'

const ActionButton = ({ name }) => {
  const cart = useContext(CartContext)
  const [enable, setEnable] = useState(true)

  useEffect(() => {
    cart.cart['storageCode'] && cart.cart['colorCode']
      ? setEnable(false)
      : setEnable(true)
  }, [cart.cart])

  return (
    <Button
      color="success"
      variant="contained"
      style={{ minWidth: '30%' }}
      disabled={enable}
      startIcon={<AddShoppingCartRoundedIcon />}
    >
      {name}
    </Button>
  )
}

ActionButton.propTypes = {
  name: PropTypes.string,
}

export default ActionButton
