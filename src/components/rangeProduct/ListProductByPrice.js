import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { addCart, countNum } from '../../redux/cartSlice'
import { fetchRange } from '../../redux/rangePriceSlice'

export default function ListProductByPrice() {
    const { rangeProducts, min, max } = useSelector(state => state.rangeProducts)
    const [anim, setAnim] = useState(false)
    const dispatch = useDispatch()
    const onAnim = (prod) => {
        setAnim(!anim)
        dispatch(addCart(prod))
        dispatch(countNum())
    }
    useEffect(()=>{
        dispatch(fetchRange({min: min, max: max}))
    },[])
    // console.log(rangeProducts && rangeProducts)
    return (
        <Container className='mb-3'>
            <div className='title' style={{ borderBottom: '1px solid #dfe6e9' }}>
                <h2 style={{color:'black'}} className='title-font'>Products price from {min}$ to {max}$</h2>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link style={{ color: '#3dc1d3' }} to='/ProjectReactJs'>
                            Home
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Filter by Price
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <Row className='p-3'>
                {
                    rangeProducts && rangeProducts.map((item, index) => (
                        <Col key={index} lg={3} className='p-3'>
                            <div data-aos='zoom-in-up' >
                                <Card style={{
                                    height: '550px',
                                    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
                                }} className={anim ? 'animate__animated animate__pulse' : ""}>
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
                                        <CardText style={{ marginTop: '80px' }}>
                                            <h4>{item.price} $</h4>
                                        </CardText>
                                        <CardText className='d-flex justify-content-between'>
                                            <Link to={'/detail/' + item.id}>
                                                <Button className='btn-detail'>Detail</Button>
                                            </Link>

                                            <Button className='btn-add' onClick={() => onAnim(item)}>Add to cart</Button>

                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
