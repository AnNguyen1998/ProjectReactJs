import React, { useRef, useState } from 'react'
import './contactUs.css'
import { Breadcrumb, BreadcrumbItem, Button, Col, Container, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

export default function ContactUs() {
    const form = useRef();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [mess, setMess] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_8h42n5k', 'template_k2jlo9a', form.current, {
                publicKey: 'KT_f0h7zBVpLZk0Mn'
            })
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your information have been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                setEmail('')
                setMess('')
                setName('')
                setPhone('')
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                console.log(error)
            })

    }
    return (
        <>
        <Container>
                <Row>
                    <Breadcrumb className='mt-3'>
                        <BreadcrumbItem className='active'>
                            <Link to='/ProjectReactJs'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Row>
            </Container>
        <Container className='mb-4 contain-contact'>
            <Row className='p-5'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.377806911984!2d106.69594667571971!3d10.782348459083071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f36156267c7%3A0xfb2f71de82868922!2zMTM1IEhhaSBCw6AgVHLGsG5nLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1723175130854!5m2!1svi!2s"
                        width="100%"
                        height="450"
                        style={{border:'0'}}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
            </Row>
            <Row>
                <Col lg={6} md={12} sm={12} xs={12} className='p-3'>
                    <h2 className='title-font'>Get in Touch</h2>
                    <p>Your email address will not be published. Required fields are marked</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="Name1">
                                        Name
                                    </Label>
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        id="Name1"
                                        name="name"
                                        placeholder="Enter your Name here..."
                                        type="text"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="Email1">
                                        Email
                                    </Label>
                                    <Input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="Email1"
                                        name="email"
                                        placeholder="Enter your Email here..."
                                        type="email"
                                        required
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="phone1">
                                Phone Number
                            </Label>
                            <Input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                id="phone1"
                                name="phone"
                                type="number"
                                placeholder='Enter your Phone Number...'
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="mess1">
                                Message
                            </Label>
                            <Input
                                value={mess}
                                onChange={(e) => setMess(e.target.value)}
                                id="mess1"
                                name="mess"
                                type="textarea"
                                placeholder='Enter your Message...'
                                required
                            />
                        </FormGroup>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button type='submit' className='btn-contact'>
                                Submit
                            </Button>
                        </div>
                    </form>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12} className='p-3'>
                    <h2 className='title-font'>Contact Information</h2>
                    <p>Here is some of our contact information if needed.</p>
                    <Row>
                        <h5>Location</h5>
                        <p>135 Hai Ba Trung St, 1 District, Ho Chi Minh City, VietNam </p>
                    </Row>
                    <Row>
                        <h5>Work Time</h5>
                        <p>Monday - Friday</p>
                        <p>9:00 - 17:00</p>
                    </Row>
                    <Row>
                        <h5>Phone Number</h5>
                        <p>(+85)128365697</p>
                    </Row>
                    <Row>
                        <h5>Email Address</h5>
                        <p>abc@gmail.com</p>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}
