import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Nav, NavItem, Row, TabContent, TabPane } from 'reactstrap'
import './productDetail.css'
import ImageZoom from "react-image-zooom";

export default function NavTab(props) {
    const {detail} = props
    const [open, setOpen] = useState('1')
    const toggle = (num)=> setOpen(num)
  return (
    <Container className='mb-5'>
                <Row className='mt-5'>
                    <Nav style={{display:'flex', justifyContent:'space-around'}} tabs>
                        <NavItem className={open=="1"?"active":''}>
                            <Link
                                onClick={()=>toggle('1')}
                            >
                                <h3>DECRIPTION</h3>
                            </Link>
                        </NavItem>
                        <NavItem className={open=="2"?"active":''}>
                            <Link
                                onClick={()=>toggle('2')}
                            >
                                <h3>INFORMATION</h3>
                            </Link>
                        </NavItem>
                        <NavItem className={open=="3"?"active":''}>
                            <Link
                                onClick={()=>toggle('3')}
                            >
                                <h3>BLOG</h3>
                            </Link>
                        </NavItem>
                        <NavItem className={open=="4"?"active":''}>
                            <Link
                                onClick={()=>toggle('4')}
                            >
                                <h3>REVIEW</h3>
                            </Link>
                        </NavItem>
                    </Nav>
                </Row>
                <Row className='mt-4'>
                    <TabContent activeTab={open}>
                        <TabPane tabId="1">
                            <Row>
                                
                                <Col sm="4">
                                   <ImageZoom alt="Zoom-images" zoom="300" style={{width:'80%'}} src={detail && detail.images[0]}/>
                                </Col>
                                <Col sm="4">
                                   <ImageZoom zoom='300' style={{width:'80%'}} src={detail && detail.images[1]}/>
                                </Col>
                                <Col sm="4">
                                   <ImageZoom zoom='300' style={{width:'80%'}} src={detail && detail.images[2]}/>
                                </Col>
                                
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <p>Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic.
                                         Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift,
                                         this t-shirt is a versatile addition to any collection.
                                         Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic.
                                         Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift,
                                         this t-shirt is a versatile addition to any collection.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                            <p>BLOG</p>
                            <p>Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic.
                                         Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift,
                                         this t-shirt is a versatile addition to any collection.</p>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12">
                                    <p>REVIEW</p>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Row>
            </Container>
  )
}
