import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import LiviLogo from '../../images/LiviLogo.png'
import { Breadcrumb, BreadcrumbItem, Button, Col, Collapse, Container, ListGroup, ListGroupItem, Nav, NavItem, Offcanvas, OffcanvasBody, OffcanvasHeader, Row, UncontrolledDropdown } from 'reactstrap';
import SearchBox from './SearchBox';
import { BsArrowDownShort, BsBagHeart, BsCart3, BsGift, BsList, BsPeople, BsPerson, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import NavbarHidden from './NavbarHidden';
import CollapseLink from './CollapseLink'
import { useSelector } from 'react-redux';
import CollapseCategories from './CollapseCategories';
import Login from '../loginPage/Login';
import { useAuth } from '../../firebaseContext/authContext';
import SearchCanvas from './SearchCanvas';
import { doSignOut } from '../../configFirebase/auth';
import Avticon from '../../images/avticon.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [canvas, setCanvas] = useState(false)
  const [isLink, setLink] = useState(false)
  const [isCate, setIsCate] = useState(false)
  const [isOpenModal, setIsopenModal] = useState(false)
  const { currentUser } = useAuth()
  const { userLoggedIn } = useAuth()
  const refcollapse = useRef(null)
  const toggleCanvas = () => setCanvas(!canvas)
  const toggle = () => setIsOpen(!isOpen);
  const { categories } = useSelector(state => state.categories)

  useEffect(() => {
    const element = refcollapse.current
    const collapseon = () => {
      setLink(true)
    }
    const collapseoff = () => {
      setLink(false)
    }
    if (refcollapse.current) {
      element.addEventListener('mouseover', collapseon)
      element.addEventListener('mouseout', collapseoff)
      return function cleanup() {
        element.removeEventListener('mouseover', collapseon)
        element.removeEventListener('mouseout', collapseoff)
      }
    }
  }, [])
  const { num } = useSelector(state => state.carts)
  const numref = useRef()
  const refnum1 = useRef()
  useEffect(() => {
    if (num <= 0) {
      numref.current.style.display = 'none'
    } else {
      numref.current.style.display = 'block'
    }
    if (num <= 0) {
      refnum1.current.style.display = 'none'
    } else {
      refnum1.current.style.display = 'block'
    }
  }, [num])
  const toggleCate = () => {
    setIsCate(!isCate)
  }
  const toggleModal = () => {
    setIsopenModal(!isOpenModal)
  }
  // console.log(currentUser)
  return (
    <div className='header font_text'>
      <Container fluid>
        <NavbarHidden />
        <Login isOpenModal={isOpenModal} toggleModal={toggleModal} />
        <CollapseCategories isCate={isCate} />
        <Container>
          <Row noGutters className='d-md-none d-lg-flex d-sm-none d-md-flex d-none d-sm-flex'>
            <Col lg={6}>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="#">
                  ENG
                </BreadcrumbItem>
                <BreadcrumbItem href="#">
                  US $
                </BreadcrumbItem>
                <BreadcrumbItem href="#">
                  Need Help?
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
            <Col lg={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="#">
                  About Us
                </BreadcrumbItem>
                <BreadcrumbItem href="#">
                  Order Tracking
                </BreadcrumbItem>
                <BreadcrumbItem href="#">
                  <Link style={{ color: 'white' }} to='/contactus'>Contact Us</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  FAQs
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
        <Row style={{ borderBottom: '1px solid rgba(255,255,255,0.4)' }}></Row>
        <Row noGutters className='p-2 d-xl-none d-lg-none d-xl-block mt-3'>
          <Col style={{ display: 'flex', justifyContent: 'start' }}>
            <div className='canvas'>
              <Offcanvas isOpen={canvas} toggle={toggleCanvas}>
                <OffcanvasHeader style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }} toggle={toggleCanvas}>
                  <h1 className='p-4' style={{ fontSize: '20px', marginTop: '50px' }}>WHAT ARE YOU LOOKING FOR?</h1>
                  <SearchCanvas />
                </OffcanvasHeader>
                <OffcanvasBody className='p-4'>
                  <strong>
                    <Nav vertical>
                      <NavItem>

                        {
                          userLoggedIn ?
                            <Breadcrumb className='p-1' listTag="div">
                              <BreadcrumbItem href="#">
                                <BsPeople style={{ fontSize: '25px', transform: 'translateY(-4px)', marginRight: '5px' }} />
                                <span>Hello, {currentUser.displayName?currentUser.displayName:currentUser.email.slice(0, currentUser.email.indexOf("@"))}</span>
                              </BreadcrumbItem>
                              <BreadcrumbItem href="#">
                                <span onClick={() => doSignOut().then(() => window.location.reload())}>LogOut</span>
                              </BreadcrumbItem>
                            </Breadcrumb>
                            :
                            <Breadcrumb className='p-1' listTag="div">
                              <BreadcrumbItem href="#">
                                <BsPeople style={{ fontSize: '25px', transform: 'translateY(-4px)', marginRight: '5px' }} />
                                <span onClick={toggleModal}>Login</span>
                              </BreadcrumbItem>
                            </Breadcrumb>
                        }
                      </NavItem>
                      <NavItem>
                        <Link to='/ProjectReactJs'>
                          Home
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link to='/product'>
                          Products
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link onClick={toggle}>
                          Categories<BsArrowDownShort fontSize={25} />
                        </Link>
                        <Collapse isOpen={isOpen}>
                          <ListGroup style={{ marginTop: '10px' }} flush>
                            {
                              categories && categories.map((item, index) => (
                                <ListGroupItem
                                  tag="a"
                                  key={index}
                                >
                                  <Link to={'/category/' + item.id}>{item.name}</Link>
                                </ListGroupItem>
                              ))
                            }
                          </ListGroup>
                        </Collapse>
                      </NavItem>
                      <NavItem>
                        <Link to='/contactus'>
                          Contact Us
                        </Link>
                      </NavItem>
                    </Nav>

                  </strong>
                </OffcanvasBody>
              </Offcanvas>
            </div>
          </Col>
          <Container>
            <Row>

              <Col lg={4} md={4} sm={4} xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={toggleCanvas} style={{ background: '#3dc1d3', border: 'none' }}><BsList fontSize={35} /></Button>
              </Col>
              <Col lg={4}  md={4} sm={4} xs={4} className='d-xl-none d-lg-none d-xl-block' style={{ display: 'flex', justifyContent: 'start', transform:'translateX(-15px)' }}>
                <Link to='/ProjectReactJs'><img src={LiviLogo} width={150} /></Link>
              </Col>
              <Col lg={4}  md={4} sm={4} xs={4} style={{ display: 'flex', justifyContent: 'center' }} className='d-xl-none d-lg-none d-xl-block'>
                <Link to='/cart' style={{ position: 'relative' }}><BsCart3 style={{ fontSize: '35px', color: 'white' }} /><p ref={numref} className='num-cart1'>{num}</p></Link>
              </Col>

            </Row>
          </Container>
        </Row>
        <Container>
          <Row noGutters style={{ padding: '40px 0px' }}>
            <Col className='d-md-none d-lg-flex d-sm-none d-md-flex d-none d-sm-flex' xl={3} lg={3}>
              <Link to='/ProjectReactJs'><img src={LiviLogo} width={200} /></Link>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12} className='p-1' style={{ display: 'flex', justifyContent: 'center' }}>
              <SearchBox />
            </Col>
            <Col xl={3} lg={3} className='d-md-none d-lg-flex d-sm-none d-md-flex d-none d-sm-flex p-2' >
              {
                userLoggedIn ?
                  <Link onClick={toggleModal} className='icon-la'>
                    <div style={{ width: '35px', height: '35px', borderRadius: '50px' }}>
                      <img src={currentUser.photoURL ? currentUser.photoURL : Avticon} style={{ width: '100%', borderRadius: '50px' }} />
                    </div>
                    <span className='menu-span'>
                      <span className='l'>Hello</span>
                      <span style={{ color: '#e74c3c' }} className='a'>{currentUser.displayName ? currentUser.displayName.slice(0, currentUser.displayName.indexOf(" ")) : currentUser.email.slice(0, currentUser.email.indexOf("@"))}</span>
                      <span style={{ width: '58px' }} className='l' onClick={() => doSignOut().then(() => { window.location.reload() })}>Sign Out</span>
                    </span>
                  </Link>
                  :
                  <Link onClick={toggleModal} className='icon-la'>
                    <BsPerson style={{ fontSize: '31px' }} />
                    <span className='menu-span'>
                      <span className='l'>Login</span>
                      <span className='a'>Account</span>
                    </span>
                  </Link>
              }

              <Link href='#' className='icon-la'>
                <BsBagHeart style={{ fontSize: '31px' }} />
                <span className='menu-span'>
                  <span className='l'>Favorite</span>
                  <span className='a'>Wishlist</span>
                </span>
              </Link>
              <Link to='/cart' className='icon-la'>
                <BsCart3 style={{ fontSize: '31px' }} />
                <p ref={refnum1} className='num-cart'>{num}</p>
                <span className='menu-span'>
                  <span className='l'>Cart</span>
                  <span className='a'>Products</span>
                </span>
              </Link>
            </Col>
          </Row>
        </Container>
        <Row style={{ borderBottom: '1px solid rgba(255,255,255,0.4)' }}></Row>
        <Container className='justify-content-between d-md-none d-lg-flex d-sm-none d-md-flex d-none d-sm-flex'>
          <Breadcrumb className='p-1' listTag='div'>
            <BreadcrumbItem>
              <button className='btn-sort' onClick={toggleCate}>
                <BsList fontSize={25} />
                SHOP BY DEPARTMENT
              </button>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Nav>
                <NavItem style={{ marginRight: '40px' }}>
                  <Link active to='/ProjectReactJs'>
                    HOME
                  </Link>
                </NavItem>
                <NavItem style={{ marginRight: '40px' }}>
                  <Link to='/product'>
                    PRODUCTS
                  </Link>
                </NavItem>
                <div ref={refcollapse}>
                  <NavItem style={{ marginRight: '40px' }}>
                    <Link>CATEGORIES <BsArrowDownShort fontSize={25} /></Link>
                    <div className='list-link' style={{ zIndex: '1' }}>
                      <CollapseLink isLink={isLink} />
                    </div>
                  </NavItem>
                </div>
                <NavItem style={{ marginRight: '40px' }}>
                  <Link href="#">
                    BLOG
                  </Link>
                </NavItem>
                <NavItem style={{ marginRight: '40px' }}>
                  <Link to='/contactus'>
                    CONTACT US
                  </Link>
                </NavItem>
              </Nav>
            </BreadcrumbItem>
          </Breadcrumb>
          <div style={{ marginTop: '15px' }}>
            <BsGift style={{ marginRight: '5px', fontSize: '20px' }} />
            <h7>Sale 15% Off Your First Order</h7>
          </div>
        </Container>
      </Container>
    </div>
  )
}
