import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ItemLink = ({ id, children }) => {
  return (
    <Link
      to={`/product/${id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {children}
    </Link>
  )
}

ItemLink.propTypes = {
  id: PropTypes.string,
  children: PropTypes.array,
}

export default ItemLink
