import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import './cart.css'
import { useSelector } from 'react-redux'

export default function Cart() {
    const { carts } = useSelector(state => state.carts)
    return (
        <Container className='mb-4 contain-cart'>
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
                <h2>{ } IN YOUR CART</h2>
            </div>
            <Row>
                {
                    carts && carts.map((item, index) => (
                        <Col key={index} xl={3} lg={3} md={4} sm={6} xs={12} className='p-3'>
                            <Card style={{ height: '500px' }}>
                                <img
                                    alt="Card"
                                    src={item.images[0]}
                                    height={300}
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        <div style={{ height: '10px' }}>
                                            {item.title}
                                        </div>
                                    </CardTitle>
                                    <CardText style={{marginTop:'50px'}}>
                                        <h4>{item.price} $</h4>
                                    </CardText>
                                    <CardText className='d-flex justify-content-between'>
                                        <Link to={'/detail/' + item.id}>
                                            <Button className='btn-detail'>Detail</Button>
                                        </Link>
                                        <Button className='btn-add'>Delete</Button>
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
