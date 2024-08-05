import React from 'react'
import './content1.css'
import { Col } from 'reactstrap'
export default function Content11() {
    return (
        <Col lg={6} sm={6} xs={6} style={{padding:'15px', display:'flex', justifyContent:'center', overflow:'hidden' }}>
            <div style={{borderRadius: '50px', overflow:'hidden' ,width:'100%'}}>
            <img className='img-content11' src='https://picsum.photos/id/123/1200/600' style={{ width: '100%', borderRadius:'30px' }} />
            </div>
        </Col>
    )
}
