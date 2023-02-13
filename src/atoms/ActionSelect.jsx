import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { MenuItem, Select } from '@mui/material'
import { CartContext } from '../context/CartProvider'

const ActionSelect = ({ name, actions }) => {
  const [value, setValue] = useState('')
  const cart = useContext(CartContext)

  const code = `${name.slice(0, -1)}Code`

  useEffect(() => {
    Object.keys(cart.cart).forEach(field => {
      if (field === code && code === 'colorCode') {
        cart.setCart({ ...cart.cart, colorCode: value })
      }
      if (field === code && code === 'storageCode') {
        cart.setCart({ ...cart.cart, storageCode: value })
      }
    })
  }, [value])

  const handleSelect = event => {
    setValue(event.target.value)
  }

  return (
    <Select
      labelId={`${name}-select-label`}
      id={`${name}-select`}
      value={value}
      label={name}
      onChange={handleSelect}
    >
      <MenuItem value={''}>
        <em>None</em>
      </MenuItem>
      {actions.map((option, i) => (
        <MenuItem key={i} value={option.code}>
          {option.name}
        </MenuItem>
      ))}
    </Select>
  )
}

ActionSelect.propTypes = {
  name: PropTypes.string,
  actions: PropTypes.array,
}

export default ActionSelect
