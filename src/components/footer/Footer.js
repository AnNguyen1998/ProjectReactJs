import React, { useState } from 'react'
import { Button, Col, Collapse, Container, Form, Input, InputGroup, Row, Tooltip } from 'reactstrap'
import './footer.css'
import { Link } from 'react-router-dom'
import { BsArrowUpCircleFill, BsPerson } from 'react-icons/bs'
import { FaCarSide, FaCreditCard, FaHandHoldingUsd, FaRocketchat } from "react-icons/fa";
import { BiLogoDiscordAlt, BiLogoFacebook, BiLogoGmail, BiLogoInstagram, BiLogoTelegram, BiLogoTiktok } from "react-icons/bi";
export default function Footer() {
  const [isOpen, setIsopen] = useState(true)
  const [isOpen1, setIsopen1] = useState(true)
  const [isOpen2, setIsopen2] = useState(true)
  const [isOpen3, setIsopen3] = useState(true)
  const [isOpen4, setIsopen4] = useState(true)
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpen1, setTooltipOpen1] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const [tooltipOpen3, setTooltipOpen3] = useState(false);
  const [tooltipOpen4, setTooltipOpen4] = useState(false);
  const [tooltipOpen5, setTooltipOpen5] = useState(false);

  const toggle = () => setIsopen(!isOpen)
  const toggle1 = () => setIsopen1(!isOpen1)
  const toggle2 = () => setIsopen2(!isOpen2)
  const toggle3 = () => setIsopen3(!isOpen3)
  const toggle4 = () => setIsopen4(!isOpen4)
  const toggleTool = () => setTooltipOpen(!tooltipOpen) ;
  const toggleTool1 = () => setTooltipOpen1(!tooltipOpen1) ;
  const toggleTool2 = () => setTooltipOpen2(!tooltipOpen2) ;
  const toggleTool3 = () => setTooltipOpen3(!tooltipOpen3) ;
  const toggleTool4= () => setTooltipOpen4(!tooltipOpen4) ;
  const toggleTool5 = () => setTooltipOpen5(!tooltipOpen5) ;
  
  return (
    <div className='footer'>
      <Container>
      <Row noGutters='true' className='p-5 footer-row'>
        <Col lg={3} sm={6} className='mt-3'>
          <Link href='#' className='icon-la'>
            <div class="animate1">
              <FaCarSide style={{ fontSize: '40px', color: '#16bcdc' }} />
            </div>
            <span className='menu-span'>
              <span className='l'>Free Delivery</span>
              <span className='a'>For all orders over $120</span>
            </span>
          </Link>
        </Col>
        <Col lg={3} sm={6} className='mt-3'>
          <Link href='#' className='icon-la'>
            <div class="animate2">
              <FaCreditCard style={{ fontSize: '40px', color: '#16bcdc' }} />
            </div>
            <span className='menu-span'>
              <span className='l'>Safe Payment</span>
              <span className='a'>100% secure payment</span>
            </span>
          </Link>
        </Col>
        <Col lg={3} sm={6} className='mt-3'>
          <Link href='#' className='icon-la'>
            <div class="animate3">
              <FaRocketchat style={{ fontSize: '40px', color: '#16bcdc' }} />
            </div>
            <span className='menu-span'>
              <span className='l'>24/7 Help Center</span>
              <span className='a'>Dedicated 24/7 support</span>
            </span>
          </Link>
        </Col>
        <Col lg={3} sm={6} className='mt-3'>
          <Link href='#' className='icon-la'>
            <div class="animate4">
              <FaHandHoldingUsd style={{ fontSize: '40px', color: '#16bcdc' }} />
            </div>
            <span className='menu-span'>
              <span className='l'>Shop With Confidence</span>
              <span className='a'>If goods have problems</span>
            </span>
          </Link>
        </Col>
      </Row>
      </Container>
      <Row className='row-d' noGutters='true' style={{ padding: '50px 50px', margin: '0px 50px', borderBottom:'1px solid rgba(255,255,255,0.4)' }}>
        <Col lg={3} md={6} sm={6} className='mt-3'>
          <h5 style={{ backgroundColor: '#222222', border: 'none' }} onClick={toggle}>
            Information
          </h5>
          <Collapse isOpen={isOpen}>
            <p>This website is built with reactjs.</p>
            <p>Contact us</p>
            <button id='fb' className='btn-logo logo-fb mt-2'><BiLogoFacebook /></button>
            <Tooltip
              isOpen={tooltipOpen}
              target="fb"
              toggle={toggleTool}
            >
              FaceBook
            </Tooltip>
            <button id='mail' className='btn-logo logo-mail mt-2'><BiLogoGmail /></button>
            <Tooltip
              isOpen={tooltipOpen1}
              target="mail"
              toggle={toggleTool1}
            >
              Mail
            </Tooltip>
            <button id='ins' className='btn-logo logo-ins mt-2'><BiLogoInstagram /></button>
            <Tooltip
              isOpen={tooltipOpen2}
              target="ins"
              toggle={toggleTool2}
            >
              Instagram
            </Tooltip>
            <button id='dis' className='btn-logo logo-dis mt-2'><BiLogoDiscordAlt /></button>
            <Tooltip
              isOpen={tooltipOpen3}
              target="dis"
              toggle={toggleTool3}
            >
              Discord
            </Tooltip>
            <button id='tele' className='btn-logo logo-tele mt-2'><BiLogoTelegram /></button>
            <Tooltip
              isOpen={tooltipOpen4}
              target="tele"
              toggle={toggleTool4}
            >
              Telegram
            </Tooltip>
            <button id='tiktok' className='btn-logo logo-tiktok mt-2'><BiLogoTiktok /></button>
            <Tooltip
              isOpen={tooltipOpen5}
              target="tiktok"
              toggle={toggleTool5}
            >
              Tiktok
            </Tooltip>
          </Collapse>
        </Col>
        <Col lg={2} md={6} sm={6} className='mt-3'>
          <h5 style={{ backgroundColor: '#222222', border: 'none' }} onClick={toggle1}>
            My Account
          </h5>
          <Collapse isOpen={isOpen1}>
            <div style={{ display: 'flex', flexDirection: 'column', opacity: '.5' }}>
              <Link>Product Support</Link>
              <Link>Checkout</Link>
              <Link>Shopping Cart</Link>
              <Link>Wishlist</Link>
              <Link>Custom Link</Link>
              <Link>Redeem Voucher</Link>
            </div>
          </Collapse>
        </Col>
        <Col lg={2} md={6} sm={6} className='mt-3'>
          <h5 style={{ backgroundColor: '#222222', border: 'none' }} onClick={toggle2}>
            Customer Service
          </h5>
          <Collapse isOpen={isOpen2}>
            <div style={{ display: 'flex', flexDirection: 'column', opacity: '.5' }}>
              <Link>Help Center</Link>
              <Link>Contact Us</Link>
              <Link>Report Abuse</Link>
              <Link>Submit a Dispute</Link>
              <Link>Policies & Rules</Link>
              <Link>Online Returns Policy</Link>
            </div>
          </Collapse>
        </Col>
        <Col lg={2} md={6} sm={6} className='mt-3'>
          <h5 style={{ backgroundColor: '#222222', border: 'none' }} onClick={toggle3}>
            Help & Customer Care
          </h5>
          <Collapse isOpen={isOpen3}>
            <div style={{ display: 'flex', flexDirection: 'column', opacity: '.5' }}>
              <Link>New Customers</Link>
              <Link>How to use My Account</Link>
              <Link>Placing an Order</Link>
              <Link>Payment Methods</Link>
              <Link>Delivery & Dispatch</Link>
              <Link>Problems with your Order</Link>
            </div>
          </Collapse>
        </Col>
        <Col lg={3} md={6} sm={6} className='mt-3'>
          <h5 style={{ backgroundColor: '#222222', border: 'none' }} onClick={toggle4}>
            Sign Up To Newsletter
          </h5>
          <Collapse isOpen={isOpen4}>
            <p>Join with me to get a new discount coupon</p>
            <Form>
              <InputGroup>
                <Input required style={{ padding: '15px' }} type='email' placeholder='Your email address...' />
                <Button className='btn-sub'>
                  SUBSCRIBE
                </Button>
              </InputGroup>
            </Form>
            <p>By providing your email address, you agree to our Privacy Policy and Terms of Service.</p>
          </Collapse>
        </Col>
      </Row>
      <Container style={{textAlign:'center', padding:'5px'}}>
        <p>Make by <Link>AnNguyen</Link></p>
      </Container>
    </div>
  )
}
