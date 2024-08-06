import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Collapse, ListGroupItem, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap'
import './collapseLink.css'
import { BsArrowRightShort } from 'react-icons/bs'
export default function CollapseLink(props) {
  const { isLink } = props
  const [dropdownOpen, setOpen] = useState(false)

  const toggle = () => setOpen((prevState) => !prevState)
  return (
    <Collapse isOpen={isLink}>
      <ListGroup className='list-link1' flush>
        <ListGroupItem
          disabled
          href="#"
          tag="a"
        >
          Smartphones
        </ListGroupItem>
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
        <ListGroupItem
          href="#"
          tag="a"
        >
          CPUs
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Cloths
        </ListGroupItem>
        <ListGroupItem
          href="#"
          tag="a"
        >
          Shoes
        </ListGroupItem>
      </ListGroup>
    </Collapse>
  )
}
