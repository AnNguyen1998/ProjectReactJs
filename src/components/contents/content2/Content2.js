import React, { useEffect, useState } from 'react'
import './content2.css'
import { Col, Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import ImgErr from '../../../images/ErrorNetwork.png'

export default function Content2() {
  const { categories } = useSelector(state => state.categories)
  
  return (
    <Container className='content2' fluid>
      <Row style={{ borderBottom: '1px solid rgba(255,255,255,0.4)', padding: '50px' }}>
        <h4 className='title-font'>Popular Categories</h4>
      </Row>
      <Container>
      <Row>
        {
          categories && categories.map((item, index) => (
            <Col key={index} lg={2} md={4} sm={6} xs={12} className='p-3'>
              <div style={{overflow:'hidden', borderRadius: '20px', position:'relative',
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
               }}>
                <a href={'#'+item.name}>
                <img className='img-cate' src={(item.image.slice(-3) == 'jpg' || item.image.slice(-4) == 'jpeg' || item.image.slice(-3) == 'png') ? item.image : ImgErr} style={{ width: '100%', borderRadius:'20px', height:'188px' }} />
                <p className='animate__animated animate__jello animate__slow animate__infinite' style={{position:'absolute', top:'10px', left:'20px', fontSize:'20px', color:'white'}}>{item.name}</p>
                </a>
              </div>
              
            </Col>
          ))
        }
      </Row>
      </Container>
    </Container>
  )
}
