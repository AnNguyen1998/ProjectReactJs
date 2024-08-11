import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import './search.css'
import { useSelector } from 'react-redux'
import ImgErr from '../../images/ErrorNetwork.png'

export default function Search() {
    const { productSearch, name } = useSelector(state => state.productSearch)
    return (
        <Container className='mb-4 contain-search'>
            <div className='title' style={{ borderBottom: '1px solid #dfe6e9' }}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link style={{ color: '#3dc1d3' }} to='/ProjectReactJs'>
                            Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Search
                    </BreadcrumbItem>
                </Breadcrumb>
                <h2 className='title-font'>{productSearch.length} RESULT FOR "{name}"</h2>
            </div>
            <Row className='p-3'>
                {
                    productSearch && productSearch.map((item, index) => (
                        <Col key={index} xl={3} lg={3} md={4} sm={6} xs={12} className='p-3'>
                            <Card style={{ height: '500px',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                             }} className='animate__animated animate__tada'>
                                <img
                                    alt="Card"
                                    src={(item.images[0].slice(-3) == 'jpg' || item.images[0].slice(-4) == 'jpeg') ? item.images[0] : ImgErr}
                                    height={300}
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {item.title}
                                    </CardTitle>
                                    <CardText>
                                        {item.price} $
                                    </CardText>
                                    <CardText className='d-flex justify-content-between'>
                                        <Link to={'/detail/'+ item.id}>
                                            <Button className='btn-detail'>Detail</Button>
                                        </Link>
                                        <Button className='btn-add'>Add to cart</Button>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
