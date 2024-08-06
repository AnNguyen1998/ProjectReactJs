import React from 'react'
import './content1.css'
import { Col } from 'reactstrap'
export default function Content11(props) {
    const {prod} = props
    return ( 
            <Col className='animate__animated animate__bounceIn' lg={6} sm={6} xs={6} style={{padding:'15px', display:'flex', justifyContent:'center' }}>
                <div style={{borderRadius: '50px', overflow:'hidden' ,width:'100%'}}>
                <img className='img-content11' src={prod.images[0]} style={{ width: '100%', borderRadius:'30px', height:'270px' }} />
                </div>
            </Col>
    )
}
