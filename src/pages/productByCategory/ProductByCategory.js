import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProductbyCategories from '../../components/productbyCategories/ProductbyCategories'

export default function ProductByCategory() {
  return (
    <div>
      <div style={{ position: 'relative', zIndex: '1' }}>
        <Header />
      </div>
      <div style={{ position: 'relative', zIndex: '0' }}>
        <ProductbyCategories />
      </div>

      <Footer />
    </div>
  )
}
