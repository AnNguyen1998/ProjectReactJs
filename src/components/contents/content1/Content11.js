import React from 'react'
import './content1.css'
import { Col } from 'reactstrap'
export default function Content11(props) {
    const {url} = props
    return (
        <>
        {
            url.map((item, index)=>(
            <Col key={index} lg={6} sm={6} xs={6} style={{padding:'15px', display:'flex', justifyContent:'center', overflow:'hidden' }}>
                <div style={{borderRadius: '50px', overflow:'hidden' ,width:'100%'}}>
                <img className='img-content11' src={item} style={{ width: '100%', borderRadius:'30px', height:'165px' }} />
                </div>
            </Col>
            ))
        }
        </>
    )
}
