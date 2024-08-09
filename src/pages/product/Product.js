import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Products from '../../components/products/Products'

export default function Product() {
  return (
    <div>
      <div style={{ position: 'relative', zIndex: '1' }}>
        <Header />
      </div>
      <div style={{ position: 'relative', zIndex: '0' }}>
        <Products />
      </div>

      <Footer />
    </div>
  )
}
