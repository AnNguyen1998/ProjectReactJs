import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import LiviLogo from '../../images/LiviLogo.png'
import { Alert, Breadcrumb, BreadcrumbItem, Button, Col, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, ListGroup, ListGroupItem, Nav, NavItem, Offcanvas, OffcanvasBody, OffcanvasHeader, Row, UncontrolledDropdown } from 'reactstrap';
import SearchBox from './SearchBox';
import { BsArrowDownShort, BsBagHeart, BsCart3, BsGift, BsList, BsPeople, BsPerson, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import NavbarHidden from './NavbarHidden';
import CollapseLink from './CollapseLink'
import { useSelector } from 'react-redux';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [canvas, setCanvas] = useState(false)
  const [isLink, setLink] = useState(false)
  const refcollapse = useRef(null)
  const toggleCanvas = () => setCanvas(!canvas)
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    const element = refcollapse.current
    const collapseon = () => {
      setLink(true)
    }
    const collapseoff = () =>{
      setLink(false)
    }
    if(refcollapse.current){
    element.addEventListener('mouseover', collapseon)
    element.addEventListener('mouseout', collapseoff)
    return function cleanup(){
      element.removeEventListener('mouseover', collapseon)
      element.removeEventListener('mouseout', collapseoff)
    }
    }
  }, [])
  const {num} = useSelector(state=>state.carts)
  return (
    <div className='header font_text'>
      <Container fluid>
        <NavbarHidden />
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
                  Contact Us
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
            <Button onClick={toggleCanvas} style={{ background: '#3dc1d3', border: 'none' }}><BsList fontSize={35} /></Button>
            <div className='canvas'>
              <Offcanvas isOpen={canvas} toggle={toggleCanvas}>
                <OffcanvasHeader style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }} toggle={toggleCanvas}>
                  <h1 className='p-4' style={{ fontSize: '20px', marginTop: '50px' }}>WHAT ARE YOU LOOKING FOR?</h1>
                  <InputGroup className='input-canvas'>
                    <Input type='text' placeholder='Search...' />
                    <Button>
                      <BsSearch style={{ fontSize: '20px' }} />
                    </Button>
                  </InputGroup>
                </OffcanvasHeader>
                <OffcanvasBody className='p-4'>
                  <strong>
                    <Nav vertical>
                      <NavItem>
                        <Breadcrumb className='p-1' listTag="div">
                          <BreadcrumbItem href="#">
                            <BsPeople style={{ fontSize: '25px', transform: 'translateY(-4px)', marginRight: '5px' }} />
                            <span>Login</span>
                          </BreadcrumbItem>
                          <BreadcrumbItem href="#">
                            <span>Register</span>
                          </BreadcrumbItem>
                        </Breadcrumb>
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
                          Another Link<BsArrowDownShort fontSize={25} />
                        </Link>
                        <Collapse isOpen={isOpen}>
                          <ListGroup style={{ marginTop: '10px' }} flush>
                            <ListGroupItem
                              href="#"
                              tag="a"
                            >
                              <Link>Link 1</Link>
                            </ListGroupItem>
                            <ListGroupItem
                              href="#"
                              tag="a"
                            >
                              <Link>Link 2</Link>
                            </ListGroupItem>
                            <ListGroupItem
                              href="#"
                              tag="a"
                            >
                              <Link>Link 3</Link>
                            </ListGroupItem>
                          </ListGroup>
                        </Collapse>
                      </NavItem>
                      <NavItem>
                        <Link href="#">
                          Contact Us
                        </Link>
                      </NavItem>
                    </Nav>

                  </strong>
                </OffcanvasBody>
              </Offcanvas>
            </div>
          </Col>
          <Col className='d-xl-none d-lg-none d-xl-block' style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <a href='#'><img src={LiviLogo} width={150} /></a>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', transform: 'translateX(14px)' }} className='d-xl-none d-lg-none d-xl-block'>
            <Link to='/cart'><BsCart3 style={{ fontSize: '35px', color: 'white'}} /></Link>
          </Col>
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
              <Link href='#' className='icon-la'>
                <BsPerson style={{ fontSize: '31px' }} />
                <span className='menu-span'>
                  <span className='l'>Login</span>
                  <span className='a'>Account</span>
                </span>
              </Link>
              <Link href='#' className='icon-la'>
                <BsBagHeart style={{ fontSize: '31px' }} />
                <span className='menu-span'>
                  <span className='l'>Favorite</span>
                  <span className='a'>Wishlist</span>
                </span>
              </Link>
              <Link to='/cart' className='icon-la'>
                <BsCart3 style={{ fontSize: '31px' }} />
                <p className='num-cart'>{num}</p>
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
              <button className='btn-sort'>
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
                  <Link>CATEGORY <BsArrowDownShort fontSize={25} /></Link>
                  <div className='list-link'>
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
                  <Link href="#">
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
