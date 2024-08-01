import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from "../product/Product"
import { Row } from 'reactstrap'
import {useDispatch, useSelector} from 'react-redux'
import { fetchGames } from '../../redux/productSlice'
import Loading from '../../pages/handlePages/Loading'
import Errorpage from '../../pages/handlePages/Errorpage'
export default function Products() {
  const {games, error, status} = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(status === 'start'){
      dispatch(fetchGames())
    }
  },[])
  if(status === 'loading') return <Loading/>
  if(status === 'failed') return <Errorpage error = {error}/>
  return (
    <div>
      <Row>
        {/* {
          games && games.map((item, index)=>(
            <Product key={index} games={item}/>
          ))
        } */}
      </Row>
    </div>
  )
}
