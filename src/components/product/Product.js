import { Card, Col } from 'antd'
import React from 'react'

export default function Product(props) {
  const { games } = props
  const { Meta } = Card
  return (
    <div>
      <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{padding: '15px'}}>
        <Card
          hoverable
          style={{
            width: 240,
            height: 400
          }}
          cover={<img alt="example" src={games.background_image} height={200}/>}
        >
          <Meta title={games.name} description={'Released: '+games.released} />
        </Card>
      </Col>
    </div>
  )
}
