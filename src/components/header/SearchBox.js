import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup } from 'reactstrap'

export default function SearchBox() {
    const [dropstate, setDropstate] = useState(false)
    const toggle = ()=>{
        setDropstate(!dropstate)
    }
    return (
        <div style={{width:'85%'}}>
            <InputGroup style={{ background:'white', borderRadius:'3px'}} className='p-2'>
                <ButtonDropdown isOpen={dropstate} toggle={toggle}>
                    <DropdownToggle className='p-2' style={{border:'none', background:'white', color:'black'}} caret>
                        All Categories
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem >
                            Smartphones
                        </DropdownItem>
                        <DropdownItem >
                            Laptops
                        </DropdownItem>
                        <DropdownItem>
                            Cloths
                        </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <Input type='text' placeholder='Searchs for products...' style={{border:'none'}} />
                <Button style={{width:'50px', background:'#16bcdc', border:'none'}}>
                <BsSearch style={{fontSize:'20px'}}/>
                </Button>
            </InputGroup>
        </div>
    )
}
