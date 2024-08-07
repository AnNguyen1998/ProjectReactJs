import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { countNum, delItemCart, quantityDown, quantityUp } from '../../redux/cartSlice'

export default function Cart() {
    const { carts, num } = useSelector(state => state.carts)
    const dispatch = useDispatch()
    const delItem = (id) => {
        dispatch(delItemCart(id))
        dispatch(countNum())
    }
    const quantity = (id) => {
        dispatch(quantityDown(id))
    }
    const quantityadd = (id) => {
        dispatch(quantityUp(id))
    }
    return (
        <Container className='mb-4 contain-cart'>
            <div className='title title-font' style={{ borderBottom: '1px solid #dfe6e9' }}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link style={{ color: '#3dc1d3' }} to='/ProjectReactJs'>
                            Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Your Cart
                    </BreadcrumbItem>
                </Breadcrumb>
                {
                    num <= 0 ? <h2>NOTHING IN YOUR CART</h2> : <h2>{num} PRODUCTS IN YOUR CART</h2>
                }
            </div>
            <Row className='p-3'>
                {
                    carts && carts.map((item, index) => (
                        <Col key={index} xl={4} lg={4} md={6} sm={12} xs={12} className='p-3' style={{display:'flex', justifyContent:'center'}}>
                            <Card style={{ height: '500px', width:'300px',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                             }}>
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
                                        <ButtonGroup >
                                            <Button disabled={item.quantity<=1?true:false} onClick={() => quantity(item.id)} style={{ width: '30%', padding: '10px', borderRadius: '30px 0 0 30px' }}>-</Button>
                                            <Button disabled style={{ width: '40%' }}>{item.quantity}</Button>
                                            <Button onClick={() => quantityadd(item.id)} style={{ width: '30%', padding: '10px', borderRadius: '0 30px 30px 0' }}>+</Button>
                                        </ButtonGroup>
                                        <Button className='btn-del' onClick={() => delItem(item.id)}>Delete</Button>
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
