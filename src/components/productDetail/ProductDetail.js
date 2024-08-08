import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../pages/handlePages/Loading';
import Errorpage from '../../pages/handlePages/Errorpage';
import { Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Col, Container, Input, Row } from 'reactstrap';
import './productDetail.css';
import NavTab from './NavTab';
import { fetchDetail } from '../../redux/productDetailSlice';
import Slider from '../slider/Slider';
import Categories from '../categories/Categories';
import { addCart, countNum } from '../../redux/cartSlice';
import Login from '../loginPage/Login';
import { useAuth } from '../../firebaseContext/authContext';
import Swal from 'sweetalert2';

export default function ProductDetail() {
    const [isOpenModal, setIsopenModal] = useState(false)
    const { id } = useParams();
    const { productDetail, error, status } = useSelector(state => state.productdetail);
    const dispatch = useDispatch();
    const {userLoggedIn} = useAuth()
    let timerInterval;
    useEffect(() => {
        console.log(id)
        dispatch(fetchDetail(id));
    }, [dispatch, id]);
    const addtoCart = (prod)=>{
        dispatch(addCart(prod))
        dispatch(countNum())
      }

    if (status === 'loading') return <Loading />;
    if (status === 'failed') return <Errorpage error={error} />;
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
        <Container className='contain-detail' fluid>
            <Login isOpenModal={isOpenModal} toggleModal={toggleModal}/>
            <Container>
                <Row>
                    <Breadcrumb className='mt-3'>
                        <BreadcrumbItem className='active'>
                            <Link to='/ProjectReactJs'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {productDetail?productDetail.title:'Product Detail'} 
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Row>
            </Container>
            <Row style={{ borderBottom: '1px solid #dfe6e9' }}></Row>
            <Container className='mt-5'>
                <Row>
                    <Col lg={5} md>
                        <div style={{ width: '100%' }}>
                            <Slider productDetail={productDetail}/>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <Row style={{ borderBottom: '1px solid #dfe6e9', marginTop: '20px' }}>
                            <h2>{productDetail?productDetail.title:"No Detail Title"}</h2>
                            <p>Review</p>
                        </Row>
                        <Row className='mt-3'>
                            <h2>${productDetail?productDetail.price:"0"}</h2>
                        </Row>
                        <Row>
                            <p>{productDetail?productDetail.description:'Product Description'}</p>
                        </Row>
                        <Row className='mt-4' style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Button
                                onClick={()=>addtoCart(productDetail)}
                                className='animate__animated animate__pulse animate__infinite infinite'
                                style={{ width: '65%', borderRadius: '30px', background: '#3dc1d3', border: 'none' }}>
                                ADD TO CART
                            </Button>
                        </Row>
                        <Row className='mt-4' style={{ borderTop: '1px solid #dfe6e9' }}>
                            <form onSubmit={userLoggedIn?popup:toggleModal}>
                            <p className='p-2'>
                                <Input className='me-2' type='checkbox' required/>
                                <span>I agree with the <Link to='/terms'>terms and conditions</Link></span>
                            </p>
                            <Button type='submit' className='p-3 animate__animated animate__headShake animate__infinite infinite'
                                style={{ width: '98%', borderRadius: '30px', background: '#c44569', border: 'none' }}>
                                BUY NOW
                            </Button>
                            </form>
                        </Row>
                    </Col>
                    <Col lg={2} className='d-none d-lg-block' style={{ display: 'flex', justifyContent: 'end', border: '1px solid #c8d6e5' }}>
                        <Row className='mt-4' style={{ borderBottom: '1px solid #dfe6e9' }}>
                            <h2>Category</h2>
                        </Row>
                        <Row>
                            <Categories/>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5'>
                <h2 className='h2-fre' style={{ textAlign: 'center' }}>Frequently Bought Together</h2>
            </Container>
            <NavTab detail={productDetail} />
        </Container>
    );
}
