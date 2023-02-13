import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LogoLink = ({ children }) => {
  return (
    <Link
      to={`/products`}
      style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
    >
      {children}
    </Link>
  )
}

LogoLink.propTypes = {
  children: PropTypes.object,
}

export default LogoLink
