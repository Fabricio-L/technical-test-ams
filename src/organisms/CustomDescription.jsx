import PropTypes from 'prop-types'
import { Table, TableContainer, Paper } from '@mui/material'
import DescriptionHead from '../molecules/DescriptionHead'
import DescriptionBody from '../molecules/DescriptionBody'

const formatData = description => {
  const dataFormated = [
    {
      name: 'Marca',
      value: description.brand,
    },
    {
      name: 'Modelo',
      value: description.model,
    },
    {
      name: 'Precio',
      value: description.price,
    },
    {
      name: 'CPU',
      value: description.cpu,
    },
    {
      name: 'RAM',
      value: description.ram,
    },
    {
      name: 'Sistema Operativo',
      value: description.os,
    },
    {
      name: 'Resolución de Pantalla',
      value: description.displayResolution,
    },
    {
      name: 'Bateria',
      value: description.battery,
    },
    {
      name: 'Cámara Principal',
      value: description.primaryCamera,
    },
    {
      name: 'Cámara Secundaria',
      value: description.secondaryCmera,
    },
    {
      name: 'Dimensiones',
      value: description.dimentions,
    },
    {
      name: 'Peso',
      value: description.weight,
    },
  ]

  return dataFormated
}

const CustomDescription = ({ description }) => {
  const columns = ['Característica', 'Descripción']
  const rows = formatData(description)

  return (
    <section>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <DescriptionHead columns={columns} />
          {rows &&
            rows.map((row, i) => (
              <DescriptionBody key={i} name={row.name} value={row.value} />
            ))}
        </Table>
      </TableContainer>
    </section>
  )
}

CustomDescription.propTypes = {
  description: PropTypes.object,
}

formatData.propTypes = {
  description: PropTypes.object,
}

export default CustomDescription
