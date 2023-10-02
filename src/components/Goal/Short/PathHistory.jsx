import { Home } from '@mui/icons-material'
import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const PathHistory = ({ child }) => {
  return (
    <div>
      <Breadcrumbs color='primary' aria-label="breadcrumb">
        <Link className='active' to="/">
          {/* <Home fontSize='10px' /> */}
          Home
        </Link>
        <Link className='active'
          to='/goals'
        >
          Goals
        </Link>
        <Link
          to="#">
          {child}
        </Link>
      </Breadcrumbs>

    </div>
  )
}
