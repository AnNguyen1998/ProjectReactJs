import React from 'react'
import { Container } from 'reactstrap'
import FileNotFound from '../../images/404.png'
export default function Errorpage(props) {
  const {error} = props
  return (
    <Container>
      <div style={{position:"absolute", top:'50%', left:'50%', transform:'translateX(-50%) translateY(-50%)'}}>
      <img alt={error} src={FileNotFound} style={{width:'700px'}}/>
      </div>
    </Container>
  )
}
