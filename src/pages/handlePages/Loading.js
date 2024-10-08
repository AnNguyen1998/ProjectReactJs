import React from 'react'
import { Spinner } from 'reactstrap'

export default function Loading() {
  return (
    <div style={{position:'absolute', left:'50%'}}>
      <Spinner
        color="primary"
        style={{
          height: '3rem',
          width: '3rem'
        }}
      >
        Loading...
      </Spinner>
    </div>
  )
}
