import useStyle from './useStyle'
import useProducts from '../hooks/useProducts'
import CustomCard from '../organisms/CustomCard'
import { Box } from '@mui/material'

const Products = () => {
  const classes = useStyle()
  const { products } = useProducts()

  return (
    <section className={classes.mainContainer}>
      <Box className={classes.showcase}>
        {products &&
          products.map((product, i) => (
            <CustomCard key={i} product={product} />
          ))}
      </Box>
    </section>
  )
}

export default Products
