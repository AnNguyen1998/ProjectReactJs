import React from 'react'
import Cart from '../../components/cart/Cart'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function CartPage() {
  return (
    <div>
      <div style={{ position: 'relative', zIndex: '1' }}>
        <Header />
      </div>
      <div style={{ position: 'relative', zIndex: '0' }}>
        <Cart />
      </div>
      <Footer />
    </div>
  )
}
