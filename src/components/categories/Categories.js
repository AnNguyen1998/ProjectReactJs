import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../redux/categorySlice'
import Loading from '../../pages/handlePages/Loading'
import Errorpage from '../../pages/handlePages/Errorpage'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

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
        <ListGroup flush>
            {categories && categories.map((item, index)=>(
                <ListGroupItem
                    disabled
                    href="#"
                    tag="a"
                    key={index}
                >
                    <Link>{item.name}</Link>
                </ListGroupItem>
            ))
            }
        </ListGroup>
    )
}