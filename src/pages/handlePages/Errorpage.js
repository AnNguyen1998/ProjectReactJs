import React from 'react'

export default function Errorpage(props) {
  const {error} = props
  return (
    <div>
        {error}
    </div>
  )
}
