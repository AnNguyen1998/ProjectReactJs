import React from 'react'
import { Col, Row } from 'reactstrap'
import Content1 from './Content1'
import Content11 from './Content11'

export default function Contain1main() {
    const urlimg = ['https://picsum.photos/id/123/1200/400',
                    'https://picsum.photos/id/456/1200/400',
                    'https://picsum.photos/id/678/1200/400',
                    'https://picsum.photos/id/123/1200/400'
                    ]
    return (
        <div className='contain-main' style={{ padding: '15px 50px'}}>
            <Row className='p-3'>
                <Col lg={6} style={{display:'flex', justifyContent:'center'}}>
                    <Content1/>
                </Col>
                <Col lg={6}>
                    <Row>
                        <Content11 url={urlimg}/>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
