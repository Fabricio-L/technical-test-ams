import { Box } from '@mui/material'
import ShopButton from '../atoms/ShopButton'
import BreadcrumbsHeader from '../molecules/BreadcrumbsHeader'
import Logo from '../molecules/Logo'
import useStyle from './useStyle'

const CustomHeader = () => {
  const classes = useStyle()

  return (
    <section className={classes.headerContainer}>
      <Box className={classes.headerSub}>
        <Logo />
        <BreadcrumbsHeader />
      </Box>
      <ShopButton />
    </section>
  )
}

export default CustomHeader
