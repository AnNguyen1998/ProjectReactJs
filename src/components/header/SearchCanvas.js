import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Input, InputGroup } from 'reactstrap'
import { addName, fetchSearchProducts } from '../../redux/searchTitleSlice'
import Loading from '../../pages/handlePages/Loading'
import Errorpage from '../../pages/handlePages/Errorpage'

export default function SearchCanvas() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { status, error } = useSelector(state => state.productSearch)
    const [text, setText] = useState('')

    const search = (text) => {
        
            dispatch(fetchSearchProducts(text))
            dispatch(addName(text))
            setText('')
    }
    if (status === 'loading') return <Loading />
    if (status === 'failed') return <Errorpage error={error} />
    return (
        <InputGroup className='input-canvas'>
            <Input type='text' placeholder='Search...' onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
                if (e.key === "Enter" && text.trim()) {
                    search(text)
                    navigate('/search', { relative: 'path' })
                    setText('')
                }
            }} />
            <Button onClick={() => { text.trim() && search(text) }}>
                <BsSearch style={{ fontSize: '20px' }} />
            </Button>
        </InputGroup>
    )
}
