import React, { useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import './login.css'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithGoogle } from "../../configFirebase/auth"
import { useAuth } from '../../firebaseContext/authContext'
import { BsXLg } from "react-icons/bs";
import GGicon from '../../images/ggicon.png'

export default function Login(props) {
    const { isOpenModal, toggleModal } = props
    const [open, setOpen] = useState('1')
    const toggle = (num) => setOpen(num)
    const { userLoggedIn } = useAuth()
    const [isSigningIn, setIsSigningIn] = useState(false)

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle() 
            .catch (err => {
        setIsSigningIn(false)
    })
}
    }
return (
    <Container>
        <Modal fullscreen='sm' centered isOpen={userLoggedIn ? false : isOpenModal} >
            <div style={{ width: '100%', height: '50px', position: 'relative' }}>
                <Button onClick={toggleModal} className='togglemodal-btn'><BsXLg style={{ fontSize: '30px', color: 'black' }} /></Button>
            </div>
            <Nav className='nav-modal' tabs>
                <Row>
                    <Col lg={6}>
                        <NavItem className={open == "1" ? "active" : ''}>
                            <NavLink
                                onClick={() => toggle('1')}
                            >
                                LOGIN
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col lg={6}>
                        <NavItem className={open == "2" ? "active" : ''}>
                            <NavLink
                                className=""
                                onClick={() => toggle('2')}
                            >
                                REGISTER
                            </NavLink>
                        </NavItem>
                    </Col>
                </Row>
            </Nav>

            <ModalBody>
                <TabContent activeTab={open}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Form>
                                    <FormGroup>
                                        <Label for="Email">
                                            Email
                                        </Label>
                                        <Input
                                            id="Email"
                                            name="email"
                                            placeholder="Enter your Email..."
                                            type="email"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="Password">
                                            Password
                                        </Label>
                                        <Input
                                            id="Password"
                                            name="password"
                                            placeholder="Enter your Password..."
                                            type="password"
                                        />
                                    </FormGroup>
                                    <Button className='btn-form'>LOGIN</Button>
                                </Form>
                                <Link>Forget your Password ?</Link>
                                <p className='mt-3'>Or Login With <Link onClick={onGoogleSignIn}><img width={60} src={GGicon} /></Link></p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Form>
                                    <FormGroup>
                                        <Label for="1Email">
                                            Email
                                        </Label>
                                        <Input
                                            id="1Email"
                                            name="email"
                                            placeholder="Enter your Email..."
                                            type="email"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="1Password">
                                            Password
                                        </Label>
                                        <Input
                                            id="1Password"
                                            name="password"
                                            placeholder="Enter your Password..."
                                            type="password"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="RecheckPassword">
                                            Re-check Password
                                        </Label>
                                        <Input
                                            id="RecheckPassword"
                                            name="password"
                                            placeholder="Enter your Password again"
                                            type="password"
                                        />
                                    </FormGroup>
                                    <Button className='btn-form'>REGISTER</Button>
                                </Form>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </ModalBody>
        </Modal>
    </Container>
)
}
