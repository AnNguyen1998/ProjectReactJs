import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Collapse, Container, Row } from 'reactstrap'
export default function CollapseCategories(props) {
    const {isCate} = props
    const { categories, status, error } = useSelector(state => state.categories)
    return (
        <div style={{position:'absolute', top:'101%', left:'16%', background:'#63cdda', width:'50%', zIndex:'1'}}>
            <Collapse isOpen={isCate}>
                <Container>
                    <Row className='p-3'>
                        {
                            categories && categories.slice(0,5).map((item, index) => (
                                <Col key={index} lg={4} md={6} sm={12} xs={12} className='p-3' style={{display:'flex', justifyContent:'center'}}>
                                    <Row>
                                        <Col lg={6}>
                                        <p>{item.name}</p>
                                        </Col>
                                        <Col lg={6}>
                                        <Link to={'/category/' + item.id}>
                                            <img src={item.image} width={100} style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius:'20px'}}/>
                                        </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </Collapse>
        </div>
    )
}
