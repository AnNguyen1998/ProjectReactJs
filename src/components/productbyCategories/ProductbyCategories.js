import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap'
import { fetchByCategory } from '../../redux/byCategoriesSlice'
import Loading from '../../pages/handlePages/Loading'
import Errorpage from '../../pages/handlePages/Errorpage'
import { Link } from 'react-router-dom'
import { addCart, countNum } from '../../redux/cartSlice'

export default function ProductbyCategories(props) {
    const [anim, setAnim] = useState(false)
    const { idCate, cateName } = props
    const { byCategories, status, error } = useSelector(state => state.byCategories)
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(fetchByCategory(idCate))
    }, [byCategories])
    if (status === 'loading') return <Loading />
    if (status === 'failed') return <Errorpage error={error} />
    const onAnim = (prod) => {
        setAnim(!anim)
        dispatch(addCart(prod))
        dispatch(countNum())
    }
    return (
        <Row>
            {
                byCategories && byCategories.slice(0, 5).map((item, index)=>(
                    <Col key={index} lg={2} md={4} sm={6} xs={12} className='mt-4'>
                        <Card style={{
                            height: '550px',
                            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
                        }} className={anim ? 'animate__animated animate__pulse' : ""}>
                            <img
                                alt="Card"
                                src={item.images[0]}
                                height={300}
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    <div style={{ height: '10px' }}>
                                        {item.title}
                                    </div>
                                </CardTitle>
                                <CardText style={{ marginTop: '80px' }}>
                                    <h4>{item.price} $</h4>
                                </CardText>
                                <CardText className='d-flex justify-content-between'>
                                    <Link to={'/detail/' + item.id}>
                                        <Button className='btn-detail'>Detail</Button>
                                    </Link>
                                    <Button className='btn-add' onClick={() => onAnim(item)}>Add to cart</Button>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))
            }

        </Row>
    )
}
