import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText, CardTitle, Col } from 'reactstrap'
import { useDispatch } from 'react-redux'
import './product.css'
import { addCart, countNum } from '../../redux/cartSlice'
import ImgErr from '../../images/ErrorNetwork.png'

export default function Product(props) {
  const [anim, setAnim] = useState(false)
  const dispatch = useDispatch()
  const { products } = props
  const onAnim = (prod)=>{
    setAnim(!anim)
    dispatch(addCart(prod))
    dispatch(countNum())
  }
  return (
    <Col xl={2} lg={3} md={4} sm={6} xs={12} className='p-3' >
      <div data-aos='zoom-in-up' >
      <Card style={{height:'550px',
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
      }} className={anim?'animate__animated animate__pulse':""}>
        <img
          alt="Card"
          src={(products.images[0].slice(-3) == 'jpg' || products.images[0].slice(-4) == 'jpeg' || products.images[0].slice(-3) == 'png') ? products.images[0] : ImgErr}
          height={300}
        />
        <CardBody>
          <CardTitle tag="h5">
            <div style={{height:'10px'}}>
            {products.title}
            </div>
          </CardTitle>
          <CardText style={{marginTop:'80px'}}>
            <h4>{products.price} $</h4>
          </CardText>
          <CardText className='d-flex justify-content-between'>
            <Link to={"/detail/" + products.id}>
            <Button className='btn-detail'>Detail</Button>
            </Link>
            
            <Button className='btn-add' onClick={()=>onAnim(products)}>Add to cart</Button>
        
          </CardText>
        </CardBody>
      </Card>
      </div>
    </Col>
  )
}
