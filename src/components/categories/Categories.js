import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../redux/categorySlice'
import Loading from '../../pages/handlePages/Loading'
import Errorpage from '../../pages/handlePages/Errorpage'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import './cate.css'

export default function Categories() {
    const { categories, status, error } = useSelector(state => state.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        if (status === 'start') {
            dispatch(fetchCategory())
        }
    }, [])
    if (status === 'loading') return <Loading />
    if (status === 'failed') return <Errorpage error={error}/>
    return (
        <ListGroup className='lg-cate' flush>
            {categories && categories.map((item, index)=>(
                <ListGroupItem
                    tag="a"
                    key={index}
                >
                    <Link to={'/category/' + item.id}>
                    {item.name}
                    </Link>
                </ListGroupItem>
            ))
            }
        </ListGroup>
    )
}
