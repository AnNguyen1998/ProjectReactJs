import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup } from 'reactstrap'
import Categories from '../categories/Categories'
import { addName, fetchSearchProducts } from '../../redux/searchTitleSlice'
import Loading from '../../pages/handlePages/Loading'
import Errorpage from '../../pages/handlePages/Errorpage'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Link, useNavigate } from 'react-router-dom';

export default function SearchBox() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { status, error } = useSelector(state => state.productSearch)
    const [text, setText] = useState('')
    const [dropstate, setDropstate] = useState(false)
    const toggle = () => {
        setDropstate(!dropstate)
    }
    const search = (text) => {
        
            dispatch(fetchSearchProducts(text))
            dispatch(addName(text))
            setText('')
    }
    if (status === 'loading') return <Loading />
    if (status === 'failed') return <Errorpage error={error} />
    return (
        <div style={{ width: '85%',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
         }}>
            <InputGroup style={{ background: 'white', borderRadius: '3px' }} className='p-2'>
                <ButtonDropdown isOpen={dropstate} toggle={toggle}>
                    <DropdownToggle className='p-2' style={{ border: 'none', background: 'white', color: 'black' }} caret>
                        All Categories
                    </DropdownToggle>
                    <DropdownMenu>
                        <Categories />
                    </DropdownMenu>
                </ButtonDropdown>
                
                    <Input type='text' placeholder='Searchs for products...' style={{ border: 'none' }}
                        onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
                            if (e.key === "Enter" && text.trim()) {
                                search(text)
                                navigate('/search', {relative:'path'})
                                setText('')
                            }
                        }} />
                
                <Link to='/search'>
                    <Button onClick={() => { text.trim() && search(text) }} style={{ width: '50px', background: '#16bcdc', border: 'none' }}>

                        <BsSearch style={{ fontSize: '20px' }} />
                    </Button>
                </Link>
            </InputGroup>
        </div>
    )
}
