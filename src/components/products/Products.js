import React, { useEffect, useState } from 'react'
import Product from "../product/Product"
import {useDispatch, useSelector} from 'react-redux'
import { fetchGames } from '../../redux/productSlice'
import Loading from '../../pages/handlePages/Loading'
import Errorpage from '../../pages/handlePages/Errorpage'
import {Container, Row} from 'reactstrap'

export default function Products() {
  const {games, error, status} = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(status === 'start'){
      dispatch(fetchGames())
    }
  },[])
  console.log(games)
  if(status === 'loading') return <Loading/>
  if(status === 'failed') return <Errorpage error = {error}/>
  return (
    <Container fluid='true'>
      <Row className='p-5'>
        {
          games && games.map((item, index)=>(
            <Product key={index} games={item}/>
          ))
        }
      </Row>
    </Container>
  )
}
