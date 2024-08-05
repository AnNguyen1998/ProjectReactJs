import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, ListGroup, ListGroupItem } from 'reactstrap'

export default function Product(props) {
  const { products } = props

  return (
    <Col xl={2} lg={3} md={4} sm={6} xs={12} className='p-3'>
      <Card style={{height:'500px'}}>
        <img
          alt="Card"
          src={products.images[0]}
          height={300}
        />
        <CardBody>
          <CardTitle tag="h5">
            {products.title}
          </CardTitle>
          <CardText>
            {products.price} $
          </CardText>
        </CardBody>
      </Card>
    </Col>
  )
}
