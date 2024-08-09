import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import { addCart, countNum } from '../../redux/cartSlice'
import "./productbyCate.css"
import { fetchByCategory } from '../../redux/byCategoriesSlice'

export default function ProductbyCategories() {
    const [anim, setAnim] = useState(false)
    const {id} = useParams()
    const { byCategories, status, error } = useSelector(state => state.byCategories)
    const dispatch = useDispatch()
    console.log(id)
    useEffect(()=>{
        dispatch(fetchByCategory(id))
    },[id, dispatch])
    const onAnim = (prod) => {
        setAnim(!anim)
        dispatch(addCart(prod))
        dispatch(countNum())
    }
    return (
        <Container>
            <Container>
                <Row >
                    <Col style={{display:'flex', justifyContent:'center'}}>
                    <Breadcrumb className='mt-3'>
                        <BreadcrumbItem className='active'>
                            <Link to='/ProjectReactJs'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            category
                        </BreadcrumbItem>
                    </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Row className='mb-4'>
                {
                    byCategories && byCategories.map((item, index) => (
                        <Col key={index} lg={3} md={4} sm={6} xs={12} className='mt-4 p-3'>
                            <div data-aos='zoom-in-up' >
                            <Card style={{
                                height: '550px',
                                boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
                            }} className={anim ? 'animate__animated animate__pulse' : ""}>
                                <img
                                    alt="Card"
                                    src={item.images && item.images[1]}
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
