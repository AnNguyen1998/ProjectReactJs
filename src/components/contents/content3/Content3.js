import React from 'react'
import { Container, Row } from 'reactstrap'
import './content3.css'
import { useSelector } from 'react-redux'
import ProductbyCategories from '../../productbyCategories/ProductbyCategories'

export default function Content3() {
  const { categories } = useSelector(state => state.categories)
  return (
    <>
      {
        categories && categories.slice(0, 5).map((item, index) => (
          <Container key={index} className='content3 mb-5' id={item.name} fluid>
            <Row style={{ borderBottom: '1px solid rgba(255,255,255,0.4)', padding: '50px' }}>
              <h4 className='title-font'>Products Of {item.name}</h4>
            </Row>
            <Container className='p-5' fluid>
              <ProductbyCategories idCate={item.id} cateName={item.name}/>
            </Container>
          </Container>
        ))
      }
    </>
  )
}
