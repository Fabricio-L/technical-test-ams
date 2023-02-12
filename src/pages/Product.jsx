import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import useStyle from './useStyle'
import useProduct from '../hooks/useProduct'
import ProductImage from '../atoms/ProductImage'
import CustomDescription from '../organisms/CustomDescription'
import CustomActions from '../organisms/CustomActions'

const Product = () => {
  const classes = useStyle()
  const { idProduct } = useParams()
  const { product } = useProduct(idProduct)

  if (!product) return null

  return (
    <section className={classes.mainContainer}>
      <Box className={classes.productContainer}>
        <Box>
          <ProductImage img={product.imgUrl} alt={product.model} />
        </Box>
        <Box>
          <CustomDescription description={product} />
          <CustomActions options={product.options} />
        </Box>
      </Box>
    </section>
  )
}

export default Product
