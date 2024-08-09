import React from 'react'
import Header from '../../components/header/Header'
import Search from '../../components/search/Search'
import Footer from '../../components/footer/Footer'

export default function SearchPage() {
  return (
    <div>
      <div style={{ position: 'relative', zIndex: '1' }}>
        <Header />
      </div>
      <div style={{ position: 'relative', zIndex: '0' }}>
        <Search />
      </div>

      <Footer />
    </div>
  )
}
