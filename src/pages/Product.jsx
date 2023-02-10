import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import useStyle from './useStyle'
import useProduct from '../hooks/useProduct'
import ProductImage from '../atoms/ProductImage'
import CustomDescription from '../organisms/CustomDescription'

const Product = () => {
  const classes = useStyle()
  const { idProduct } = useParams()
  const { product } = useProduct(idProduct)

  console.log(product)

  if (!product) return null

  return (
    <section className={classes.mainContainer}>
      <Box>
        <ProductImage img={product.imgUrl} alt={product.model} />
        <CustomDescription description={product} />
      </Box>
    </section>
  )
}

export default Product
