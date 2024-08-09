import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { addCart, countNum } from '../../redux/cartSlice'

export default function ListProductByPrice() {
    const { rangeProducts } = useSelector(state => state.rangeProducts)
    const [anim, setAnim] = useState(false)
    const dispatch = useDispatch()
    const onAnim = (prod) => {
        setAnim(!anim)
        dispatch(addCart(prod))
        dispatch(countNum())
    }
    // console.log(rangeProducts && rangeProducts)
    return (
        <Container className='mb-3'>
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
