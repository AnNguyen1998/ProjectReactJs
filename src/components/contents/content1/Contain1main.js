import React from 'react'
import { Col, Row } from 'reactstrap'
import Content1 from './Content1'
import Content11 from './Content11'

export default function Contain1main() {
    return (
        <div className='contain-main' style={{ padding: '15px 50px' }}>
            <Row className='p-3'>
                <Col lg={6}>
                    <Content1 />
                </Col>
                <Col lg={6}>
                    <Row>
                        <Content11 />

                        <Content11 />

                        <Content11 />

                        <Content11 />

                    </Row>
                </Col>
            </Row>
        </div>
    )
}
