import { useState, useMemo } from 'react'
import apiGetProducts from '../services/apiGetProducts'

const useProducts = () => {
  const [products, setProducts] = useState(null)

  useMemo(async () => setProducts(await apiGetProducts()), [])

  return {
    products,
  }
}

export default useProducts
