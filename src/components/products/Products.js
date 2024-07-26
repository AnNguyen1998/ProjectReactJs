import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from "../product/Product"
import { Row } from 'reactstrap'

export default function Products() {
  const [data, setData] = useState([])
  const url ="https://66a1b51e967c89168f1d5fd2.mockapi.io/students/api/v1/student"
  function fetchData(){
    axios.get(url)
    .then(function(res){
      setData(res.data)
    })
    .catch(function(error){
      console.log(error)
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <Row>
        {
          data.map((item, index)=>(
            <Product key={index} product={item}/>
          ))
        }
      </Row>
    </div>
  )
}
