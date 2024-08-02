import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Products from '../../components/products/Products'
import { Layout } from 'antd'

export default function Home() {
  return (
    <Layout>
        <Header/>
            <Products/>
        <Footer/>
    </Layout>
  )
}
