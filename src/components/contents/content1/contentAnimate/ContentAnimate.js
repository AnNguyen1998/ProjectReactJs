import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import './contentAnimate.css'
export default function ContentAnimate() {
    return (
        <Container className='pause-ani' style={{ background: '#f8a5c2', padding: '20px' }} fluid>
            <div className='d-flex coverAni'>
                <div className='wrapper' style={{width:'100%'}}>
                    <div className='d-flex first'>
                        <div>
                            <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                        </div>
                        <div>
                            <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                        </div>
                        <div>
                            <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                        </div>
                        <div>
                            <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                        </div>
                        <div>
                            <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                        </div>
                        <div>
                            <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                        </div>
                        <div>
                            <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                        </div>
                    </div>
                    <div className='d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block'>
                        <div className='d-flex second'>
                            <div>
                                <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                            </div>
                            <div>
                                <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                            </div>
                            <div>
                                <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                            </div>
                            <div>
                                <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                            </div>
                            <div>
                                <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                            </div>
                            <div>
                                <Link style={{ color: 'white', marginRight: '50px' }}>Sign up to get discount coupon</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
