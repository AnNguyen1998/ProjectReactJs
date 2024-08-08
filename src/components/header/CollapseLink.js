import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Collapse, ListGroupItem, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap'
import './collapseLink.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { useSelector } from 'react-redux'
export default function CollapseLink(props) {
  const { isLink } = props
  const [dropdownOpen, setOpen] = useState(false)
  const {categories} = useSelector(state=>state.categories)
  const toggle = () => setOpen((prevState) => !prevState)
  return (
    <Collapse style={{zIndex:'10'}} isOpen={isLink}>
      <ListGroup className='list-link1' flush>
        {
          categories&&categories.map((item, index)=>(
            <ListGroupItem
          disabled
          href="#"
          tag="a"
          key={index}
        >
          {item.name}
        </ListGroupItem>
          ))
        }
        <ListGroupItem
          href="#"
          tag="a"
          onClick={toggle}
        >
          Laptops<BsArrowRightShort fontSize={25} />
          <Dropdown
            isOpen={dropdownOpen}
            className="me-2"
            direction="end"
          >
            <div className='drop-mn'>
            <DropdownMenu>
              <DropdownItem>
                Laptop Gaming
              </DropdownItem>
              <DropdownItem>
                Office Laptop 
              </DropdownItem>
              <DropdownItem>
                Workstation
              </DropdownItem>
            </DropdownMenu>
            </div>
          </Dropdown>
        </ListGroupItem>
      </ListGroup>
    </Collapse>
  )
}
