import React from 'react'
import { Card, CardBody, CardLink, CardText, CardTitle, Col, ListGroup, ListGroupItem } from 'reactstrap'

export default function Product(props) {
  const { games } = props

  return (
    <Col xl={2} lg={3} md={4} sm={6} xs={12} className='p-3'>
      <Card style={{height:'500px'}}>
        <img
          alt="Card"
          src=''
          height={150}
        />
        <CardBody>
          <CardTitle tag="h5">
            {games.product.category}{games.product.family}{games.product.brand}
          </CardTitle>
          <CardText>
            
          </CardText>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>
            
          </ListGroupItem>
          <ListGroupItem>
            
          </ListGroupItem>
          <ListGroupItem>
            And a third item
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  )
}
