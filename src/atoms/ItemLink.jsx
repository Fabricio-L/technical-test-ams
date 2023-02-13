import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ItemLink = ({ model, id, children }) => {
  return (
    <Link
      to={`/products/${model}/${id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {children}
    </Link>
  )
}

ItemLink.propTypes = {
  model: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.array,
}

export default ItemLink
