import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './content3.css'
import { useDispatch, useSelector } from 'react-redux'
import ProductbyCategories from '../../productbyCategories/ProductbyCategories'
import { Link } from 'react-router-dom'
import { BsCardText } from "react-icons/bs";
import { fetchByCategory } from '../../../redux/byCategoriesSlice'
import Loading from '../../../pages/handlePages/Loading'
import Errorpage from '../../../pages/handlePages/Errorpage'

export default function Content3() {
  const { categories } = useSelector(state => state.categories)
  const { status, error } = useSelector(state => state.byCategories)
  const dispatch = useDispatch()
  const handleCate = (idCate)=>{
    dispatch(fetchByCategory(idCate))
  }
    if (status === 'loading') return <Loading />
    if (status === 'failed') return <Errorpage error={error} />
  return (
    <>
      {
        categories && categories.slice(0, 5).map((item, index) => (
          <Container key={index} className='content3 mb-5' id={item.name} fluid>
            <Row style={{ borderBottom: '1px solid rgba(255,255,255,0.4)', padding: '50px' }}>
              <Col>
              <h4 className='title-font'>Products Of {item.name}</h4>
              </Col>
              <Col style={{display:'flex', justifyContent:'end'}}>
              <Link to={'/category/' + item.id} onClick={()=>handleCate(item.id)}>All of {item.name} <BsCardText /></Link>
              </Col>
            </Row>
            <Container className='p-5' fluid>
              
            </Container>
          </Container>
        ))
      }
    </>
  )
}
