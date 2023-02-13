import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const CartContext = createContext(null)

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState({
    id: null,
    colorCode: null,
    storageCode: null,
  })

  return (
    <CartContext.Provider value={{ cart, setCart, count, setCount }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.object,
}

export default CartProvider
