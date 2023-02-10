import Logo from '../molecules/Logo'
import useStyle from './useStyle'

const CustomHeader = () => {
  const classes = useStyle()

  return (
    <section className={classes.headerContainer}>
      <Logo />
    </section>
  )
}

export default CustomHeader
