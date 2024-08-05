import React, { useRef, useState } from 'react'
import './header.css'
import LiviLogo from '../../images/LiviLogo.png'
import { Breadcrumb, BreadcrumbItem, Button, Col, Collapse, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, Offcanvas, OffcanvasBody, OffcanvasHeader, Row, UncontrolledDropdown } from 'reactstrap';
import SearchBox from './SearchBox';
import { BsBagHeart, BsCart3, BsGift, BsList, BsPeople, BsPerson, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import NavbarHidden from './NavbarHidden';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [canvas, setCanvas] = useState(false)
  const { navBar } = useRef()
  const toggleCanvas = () => setCanvas(!canvas)
  const toggle = () => setIsOpen(!isOpen);

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
        <Row className='p-2 d-xl-none d-lg-none d-xl-block'>
          <Col style={{ display: 'flex', justifyContent: 'start' }}>
            <Button onClick={toggleCanvas} style={{ background: '#2b38d1', border: 'none' }}><BsList fontSize={35} /></Button>
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
                        <Link href="#">
                          Home
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link to='/product'>
                          Products
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link href="#">
                          Another Link
                        </Link>
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
            <BsCart3 style={{ fontSize: '35px', color: 'white' }} />
          </Col>
        </Row>
        <Container>
        <Row noGutters style={{ padding: '40px 0px' }}>
          <Col className='d-md-none d-lg-flex d-sm-none d-md-flex d-none d-sm-flex' xl={3} lg={3}>
            <a href='#'><img src={LiviLogo} width={200} /></a>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12} className='p-1' style={{ display: 'flex', justifyContent: 'center' }}>
            <SearchBox />
          </Col>
          <Col xl={3} lg={3} className='d-md-none d-lg-flex d-sm-none d-md-flex d-none d-sm-flex p-2' style={{ overflow: "hidden"}}>
            <Link href='#' className='icon-la'>
              <BsPerson style={{ fontSize: '32px' }} />
              <span className='menu-span'>
                <span className='l'>Login</span>
                <span className='a'>Account</span>
              </span>
            </Link>
            <Link href='#' className='icon-la'>
              <BsBagHeart style={{ fontSize: '32px' }} />
              <span className='menu-span'>
                <span className='l'>Favorite</span>
                <span className='a'>Wishlist</span>
              </span>
            </Link>
            <Link href='#' className='icon-la'>
              <BsCart3 style={{ fontSize: '32px' }} />
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
                <NavItem style={{ marginRight: '40px' }}>
                  <Link href="#">
                    UNKNOW
                  </Link>
                </NavItem>
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
