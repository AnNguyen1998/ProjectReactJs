import React, { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Content11 from './Content11'
import { useDispatch, useSelector } from 'react-redux'
import SliderContent1 from '../content1/SliderContent1'
import { fetchProducts } from '../../../redux/productSlice'

export default function Contain1main() {
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <Container>
            <Row className='p-3'>
                <Col lg={6} style={{ display: 'flex', justifyContent: 'end', marginTop:'20px'}}>
                    <SliderContent1 product={products[18]} />
                </Col>
                <Col lg={6} style={{marginTop:'30px'}}>
                    <Row>
                        {
                            products && products.slice(15, 19).map((item, index) => (
                                <Content11 key={index} prod={item} />
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
