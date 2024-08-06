import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import './search.css'
import { useSelector } from 'react-redux'

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
                <h2>{productSearch.length} RESULT FOR "{name}"</h2>
            </div>
            <Row>
                {
                    productSearch && productSearch.map((item, index) => (
                        <Col key={index} xl={3} lg={3} md={4} sm={6} xs={12} className='p-3'>
                            <Card style={{ height: '500px' }} className='animate__animated animate__tada'>
                                <img
                                    alt="Card"
                                    src={item.images[0]}
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
