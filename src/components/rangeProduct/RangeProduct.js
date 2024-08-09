import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Col, Container, Dropdown, DropdownMenu, FormGroup, Input, Label, Row } from 'reactstrap'
import { fetchRange } from '../../redux/rangePriceSlice'
import { useNavigate } from 'react-router-dom'

export default function RangeProduct() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toggle = () => {
        setDropdownOpen(!dropdownOpen)
        // console.log("aaa")
    }
    const handle_filter = ()=>{
        dispatch(fetchRange(min, max))
        // navigate('/filterbyprice')
    }
    
    return (
        <Container>
            <Row>
                <Col lg={3} className='d-flex p-3'>
                    <h5 style={{ color: 'black', marginRight: '10px' }}>Filter By:</h5>
                    <Button onClick={toggle}>Price</Button>
                </Col>
                <Dropdown isOpen={dropdownOpen}>
                    <DropdownMenu className='p-2'>
                        
                            <FormGroup>
                                <Label for="Min">
                                    Min
                                </Label>
                                <Input
                                    id="Min"
                                    name="min"
                                    type="number"
                                    value={min}
                                    onChange={(e)=>setMin(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Max">
                                    Max
                                </Label>
                                <Input
                                    id="Max"
                                    name="max"
                                    type="number"
                                    value={max}
                                    onChange={(e)=>setMax(e.target.value)}
                                />
                            </FormGroup>   
                            <Button onClick={handle_filter}>Confirm</Button>           
                    </DropdownMenu>
                </Dropdown>

            </Row>
        </Container>
    )
}
