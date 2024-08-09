import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Content from '../../components/contents/Content'

export default function Home() {
  return (
    <div>
      <div style={{position:'relative', zIndex:'1'}}>
      <Header />
      </div>
      <div style={{position:'relative', zIndex:'0'}}>
      <Content />
      </div>
      <Footer />
    </div>
  )
}
