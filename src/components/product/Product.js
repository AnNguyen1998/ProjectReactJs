import React from 'react'
import { Card, CardBody, CardLink, CardText, CardTitle, Col, ListGroup, ListGroupItem } from 'reactstrap'

export default function Product(props) {
  const { games } = props

  return (
    <Col xl={2} lg={3} md={4} sm={6} xs={12}>
      <Card>
        <img
          alt="Card"
          src={games.background_image}
        />
        <CardBody>
          <CardTitle tag="h5">
            {games.name}
          </CardTitle>
          <CardText>
            This is some text within a card body.
          </CardText>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>
            An item
          </ListGroupItem>
          <ListGroupItem>
            A second item
          </ListGroupItem>
          <ListGroupItem>
            And a third item
          </ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  )
}
