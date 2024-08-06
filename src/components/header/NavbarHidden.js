import React, { useEffect, useRef, useState } from 'react'
import { BsArrowUpCircleFill, BsGift, BsList } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Collapse, Container, Nav, NavItem } from 'reactstrap'

export default function NavbarHidden() {
    const [isOpen, setIsOpen] = useState(false)
    const btnref = useRef()
    useEffect(()=>{
        function stickNavbar(){
            if(window !== undefined){
                let windowHeight = window.scrollY
                if(windowHeight > 185){
                    setIsOpen(true)
                    btnref.current.style.display = 'block'
                }  else{
                    setIsOpen(false)
                    btnref.current.style.display = 'none'
                }
            }
        }

        window.addEventListener('scroll', stickNavbar)
        return ()=> window.removeEventListener('scroll', stickNavbar) 
    },[])
    const scrolltoTop = () =>{
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    }
  return (
    <>
    <button style={{display:'none'}} ref={btnref} onClick={scrolltoTop} className='scrolltotop animate__animated animate__slow animate__shakeY animate__infinite'><BsArrowUpCircleFill fontSize={60} color='white'/></button>
    <Collapse style={{position:'fixed', top:'0', left:'0px', zIndex:'2', width:'100%', background:'#3dc1d3'}} isOpen={isOpen}>
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
        </Collapse>
        </>
  )
}
