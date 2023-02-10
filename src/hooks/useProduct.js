import { useState, useMemo } from 'react'
import apiGetProduct from '../services/apiGetProduct'

const useProducts = id => {
  const [product, setProduct] = useState(null)

  useMemo(async () => setProduct(await apiGetProduct(id)), [])

  return {
    product,
  }
}

export default useProducts
