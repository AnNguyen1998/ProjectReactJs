import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMis } from '../../../redux/clothesSlice'
import Loading from '../../../pages/handlePages/Loading'
import Errorpage from '../../../pages/handlePages/Errorpage'
import { Link } from 'react-router-dom'
import { addCart, countNum } from '../../../redux/cartSlice'

export default function Content8() {
  
  const [anim, setAnim] = useState(false)
  const { mis, status, error } = useSelector(state => state.clothes)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchMis())
  }, [])
  if (status === 'loading') return <Loading />
  if (status === 'failed') return <Errorpage error={error} />
  const onAnim = (prod)=>{
    setAnim(!anim)
    dispatch(addCart(prod))
    dispatch(countNum())
  }
  
  return (
    <Container className='contain4'>
      <Row>
        {
          mis && mis.slice(0, 6).map((item, index) => (
            <Col key={index} lg={2} md={4} sm={6} xs={12}>
              <div data-aos='zoom-in-up' >
                <Card style={{
                  height: '450px',
                  boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
                }} className={anim ? 'animate__animated animate__pulse' : ""}>
                  <img
                    alt="Card"
                    src={item.images && item.images[0]}
                    height={300}
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      <div style={{ height: '10px' }}>
                        {item.title}
                      </div>
                    </CardTitle>
                    <CardText style={{ marginTop: '80px' }}>
                      <h3>{item.price} $</h3>
                    </CardText>
                    <CardText className='d-flex justify-content-between'>
                      <Link to={'/detail/' + item.id}>
                        <Button className='btn-detail'>Detail</Button>
                      </Link>

                      <Button className='btn-add' onClick={() => onAnim(item)}>Add cart</Button>

                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}
