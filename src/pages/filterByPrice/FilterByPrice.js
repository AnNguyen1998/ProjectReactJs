import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ListProductByPrice from '../../components/rangeProduct/ListProductByPrice'


export default function FilterByPrice() {
  return (
    <div>
      <div style={{ position: 'relative', zIndex: '1' }}>
        <Header />
      </div>
      <div style={{ position: 'relative', zIndex: '0' }}>
        <ListProductByPrice />
      </div>

      <Footer />
    </div>
  )
}
