import { useEffect, useState } from 'react'
import { useMatches } from 'react-router-dom'
import { Breadcrumbs, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import BreadcrumbLlink from '../atoms/BreadcrumbLink'

const BreadcrumbsHeader = () => {
  const matches = useMatches()
  const [paths, setPaths] = useState([])

  useEffect(() => {
    setPaths(matches[1]?.pathname?.split('/').slice(1, 3))
  }, [matches])

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon color="secondary" fontSize="small" />}
      aria-label="breadcrumb"
      style={{ margin: '5px' }}
    >
      <BreadcrumbLlink>{paths[0]}</BreadcrumbLlink>
      {paths[1] && <Typography color="white">{paths[1]}</Typography>}
    </Breadcrumbs>
  )
}

export default BreadcrumbsHeader
