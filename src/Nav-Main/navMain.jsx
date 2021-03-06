import React from 'react'
import {Navbar,Nav, Container, Form, FormControl, Button, ModalBody} from 'react-bootstrap'

export default function NavMain() {
 return (
    <>
        <ModalBody bg="primary" >
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container fluid>
                <Navbar.Brand href="/">Frontend-Website </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href='/home'>Home</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </ModalBody>
    </>
    
  )
}
