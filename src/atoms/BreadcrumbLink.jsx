import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BreadcrumbLlink = ({ children }) => {
  return (
    <Link
      to={`/products`}
      style={{
        textDecoration: 'none',
        color: 'white',
        textTransform: 'capitalize',
      }}
    >
      {children}
    </Link>
  )
}

BreadcrumbLlink.propTypes = {
  children: PropTypes.string,
}

export default BreadcrumbLlink
