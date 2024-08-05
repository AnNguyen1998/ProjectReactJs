import React, { useEffect, useState } from 'react'
import { BsGift, BsList } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Collapse, Container, Nav, NavItem } from 'reactstrap'

export default function NavbarHidden() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        function stickNavbar(){
            if(window !== undefined){
                let windowHeight = window.scrollY
                if(windowHeight > 185){
                    setIsOpen(true)
                }  else{
                    setIsOpen(false)
                }
            }
        }

        window.addEventListener('scroll', stickNavbar)
        return ()=> window.removeEventListener('scroll', stickNavbar) 
    },[])

  return (
    <Collapse style={{position:'fixed', top:'0', left:'0px', zIndex:'2', width:'100%', background:'#2b38d1'}} isOpen={isOpen}>
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
  )
}
