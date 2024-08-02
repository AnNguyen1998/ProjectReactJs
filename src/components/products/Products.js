import React, { useEffect, useState } from 'react'
import Product from "../product/Product"
import {useDispatch, useSelector} from 'react-redux'
import { fetchGames } from '../../redux/productSlice'
import Loading from '../../pages/handlePages/Loading'
import Errorpage from '../../pages/handlePages/Errorpage'
import { Col, Layout, Row } from 'antd'
export default function Products() {
  const {Content} = Layout
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
    <Content style={{border:'1px solid yellow', height:'40%', background:'black'}}>
      <Row style={{justifyContent:'center'}}>
        {
          games && games.slice(0,20).map((item, index)=>(
            <Product key={index} games={item}/>
          ))
        }
      </Row>
    </Content>
  )
}
