import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap'

export default function Product(props) {
  const {product} = props
  return (
    <div>
      <Col>
        <Card>
          <img alt="" src=""/>
          <CardBody>
            <CardTitle tag="h5">
              
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              
            </CardSubtitle>
            <CardText>
              {product.name}
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
      </Col>
    </div>
  )
}
