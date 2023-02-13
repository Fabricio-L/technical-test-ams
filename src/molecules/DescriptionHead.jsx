import PropTypes from 'prop-types'
import { TableHead, TableRow } from '@mui/material'
import ProductDescriptionTitle from '../atoms/ProductDescriptionTitle'

const DescriptionHead = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column, i) => (
          <ProductDescriptionTitle key={i} name={column} />
        ))}
      </TableRow>
    </TableHead>
  )
}

DescriptionHead.propTypes = {
  columns: PropTypes.array,
}

export default DescriptionHead
