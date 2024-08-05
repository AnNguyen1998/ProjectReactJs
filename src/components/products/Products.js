import React, { useEffect, useState } from 'react'
import Product from "../product/Product"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/productSlice'
import Loading from '../../pages/handlePages/Loading'
import Errorpage from '../../pages/handlePages/Errorpage'
import { Breadcrumb, BreadcrumbItem, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'
import './products.css'
import { Link } from 'react-router-dom'
export default function Products() {
  const { products, error, status } = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [current, setCurrent] = useState(0)
  const numPage = Math.ceil(products.length / 12)
  const pageSize = Math.ceil(products.length / 4.5)
  useEffect(() => {
    if (status === 'start') {
      dispatch(fetchProducts())
    }
  }, [])
  if (status === 'loading') return <Loading />
  if (status === 'failed') return <Errorpage error={error} />
  const handle_click = (e, index) => {
    e.preventDefault();
    setCurrent(index)
  }
  const handle_pre = (e, index) => {
    e.preventDefault();
    setCurrent(index - 1)
  }
  const handle_next = (e, index) => {
    e.preventDefault();
    setCurrent(index + 1)
  }
  return (
    <Container fluid="true">
      <div className='title'>
        <h2>List Products</h2>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link style={{color:'#3dc1d3'}} to='/ProjectReactJs'>
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            Library
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Row noGutters='true' style={{ padding: '30px' }}>
        {
          products && products.slice(current * pageSize, (current + 1) * pageSize).map((item, index) => (
            <Product key={index} products={item} />
          ))
        }
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination>
          <PaginationItem disabled={current <= 0}>
            <PaginationLink style={{border:'1px solid #3dc1d3', color:'#3dc1d3'}}
              onClick={(e) => handle_pre(e, current)}
              href="#"
              previous
            />
          </PaginationItem>
          {
            [...Array(numPage)].map((page, i) => (
              <PaginationItem active={i === current} key={i}>
                <PaginationLink style={{border:'1px solid #3dc1d3', color:'#3dc1d3'}} href="#" onClick={(e) => handle_click(e, i)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))

          }
          <PaginationItem disabled={current >= numPage - 1}>
            <PaginationLink style={{border:'1px solid #3dc1d3', color:'#3dc1d3'}}
              onClick={(e) => handle_next(e, current)}
              href="#"
              next
            />
          </PaginationItem>
        </Pagination>
      </div>
    </Container>
  )
}
