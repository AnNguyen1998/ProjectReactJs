import React from 'react'
import ContactUs from '../../components/contactUs/ContactUs'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Contact() {
  return (
    <div>
        <div style={{ position: 'relative', zIndex: '1' }}>
        <Header />
      </div>
      <div style={{ position: 'relative', zIndex: '0' }}>
      <ContactUs/>
      </div>
        
        <Footer/>
    </div>
  )
}
