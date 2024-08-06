import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { countNum, delItemCart } from '../../redux/cartSlice'

export default function Cart() {
    const { carts, num } = useSelector(state => state.carts)
    const dispatch = useDispatch()
    const delItem = (id) => {
        dispatch(delItemCart(id))
        dispatch(countNum())
    }
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
                {
                    num <= 0 ? <h2>NOTHING IN YOUR CART</h2> : <h2>{num} PRODUCTS IN YOUR CART</h2>
                }
            </div>
            <Row className='p-3'>
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
                                    <CardText style={{ marginTop: '50px' }}>
                                        <h4>{item.price} $</h4>
                                    </CardText>
                                    <CardText className='d-flex justify-content-between'>
                                        <Link to={'/detail/' + item.id}>
                                            <Button className='btn-detail'>Detail</Button>
                                        </Link>
                                        <ButtonGroup style={{ width: '100px' }}>
                                            <Button style={{ width: '30%', padding: '15px', borderRadius: '30px 0 0 30px' }}>-</Button>
                                            <Button>1</Button>
                                            <Button style={{ width: '30%', padding: '15px', borderRadius: '0 30px 30px 0' }}>+</Button>
                                        </ButtonGroup>
                                        <Button className='btn-add' onClick={() => delItem(item.id)}>Delete</Button>
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
