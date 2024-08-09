import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ProductDetail from '../../components/productDetail/ProductDetail'

export default function Productdetail() {
  return (
    <div>
        <div style={{ position: 'relative', zIndex: '1' }}>
        <Header />
      </div>
      <div style={{ position: 'relative', zIndex: '0' }}>
      <ProductDetail/>
      </div>
            
        <Footer/>
    </div>
  )
}
