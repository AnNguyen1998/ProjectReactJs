import React from 'react'
import './content1.css'
import { Col } from 'reactstrap'

export default function Content11(props) {
    const {prod} = props
    return ( 
            <Col className='animate__animated animate__bounceIn' lg={6} sm={6} xs={6} style={{padding:'15px', display:'flex', justifyContent:'center' }}>
                <div style={{borderRadius: '50px', overflow:'hidden' ,width:'100%',
                    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
                }}>
                <img className='img-cont11' src={prod.images[0]} style={{ width: '100%', borderRadius:'30px', height:'270px' }} />
                <p style={{position:'absolute', top:'12%', left:'10%', fontSize:'18px',textShadow:'4px 4px 0px rgba(0,0,0,0.4)'}}>{prod.title}</p>
                </div>
            </Col>
    )
}
