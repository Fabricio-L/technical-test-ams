import PropTypes from 'prop-types'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded'
import { Button } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartProvider'
import apiPostProduct from '../services/apiPostProduct'

const ActionButton = ({ name }) => {
  const cart = useContext(CartContext)
  const [enable, setEnable] = useState(true)

  useEffect(() => {
    cart.cart['storageCode'] && cart.cart['colorCode']
      ? setEnable(false)
      : setEnable(true)
  }, [cart.cart])

  const handleAddProduct = async () => {
    const resp = await apiPostProduct(cart.cart)
    cart.setCount(resp.count)
  }

  return (
    <Button
      color="secondary"
      variant="contained"
      style={{ minWidth: '30%', margin: '1rem 0rem', boxShadow: 'unset' }}
      disabled={enable}
      onClick={handleAddProduct}
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
