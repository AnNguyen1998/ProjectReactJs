import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { countNum, delItemCart, quantityDown, quantityUp } from '../../redux/cartSlice'
import { useAuth } from '../../firebaseContext/authContext'
import Login from '../loginPage/Login'
import Swal from 'sweetalert2'

export default function Cart() {
    const [isOpenModal, setIsopenModal] = useState(false)
    const { carts, num } = useSelector(state => state.carts)
    let timerInterval;
    const [flag, setFlag] = useState(true)
    const dispatch = useDispatch()
    const checkprice = useRef()
    const [price, setPrice] = useState(0)
    const {userLoggedIn} = useAuth()
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
    const countPrice = (pri)=>{
        if(flag){
            setPrice(prev => prev+=pri*1)
            setFlag(!flag)
        }else{
            setPrice(prev => prev-=pri)
            setFlag(!flag)
        }
        
    }
    const toggleModal = (e)=>{
        e.preventDefault();
        setIsopenModal(!isOpenModal)
      }
    const popup = (e)=>{
        e.preventDefault()
        Swal.fire({
            title: "Notification!",
            html: "Paid Successfull.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {

                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        })
    }
    return (
        <Container className='mb-4 contain-cart'>
            <Login isOpenModal={isOpenModal} toggleModal={toggleModal}/>
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
            <Row className='mt-4'>
                <Col lg={6} style={{display:'flex'}}>
                    <p style={{ color: 'black', fontSize: '30px', marginRight:'20px' }}>Price: {price}$</p>
                    <Button onClick={userLoggedIn?popup:toggleModal} type='submit' className='p-3 animate__animated animate__headShake animate__infinite infinite'
                        style={{ width: '20%', borderRadius: '30px', background: '#c44569', border: 'none' }}>
                        BUY NOW
                    </Button>
                </Col>
            </Row>
            <Row className='p-3'>
                {
                    carts && carts.map((item, index) => (
                        <Col key={index} xl={4} lg={4} md={6} sm={12} xs={12} className='p-3' style={{ display: 'flex', justifyContent: 'center' }}>
                            <Card style={{
                                height: '500px', width: '300px',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                            }}>
                                <img
                                    alt="Card"
                                    src={item.images[0]}
                                    height={300}
                                />
                                <input ref={checkprice} style={{ position: 'absolute' }} type='checkbox' value={item.price*item.quantity} onClick={(e)=>countPrice(e.target.value)}/>
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
                                            <Button disabled={item.quantity <= 1 ? true : false} onClick={() => quantity(item.id)} style={{ width: '30%', padding: '10px', borderRadius: '30px 0 0 30px' }}>-</Button>
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
