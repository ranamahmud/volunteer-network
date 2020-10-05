import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <Container id="header">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <Link to="/">
                        <Image id="logo" src={require("../../logos/Group 1329.png")} />
                    </Link>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Destination</Nav.Link>
                    <Nav.Link href="#pricing">Events</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>

                    <Button variant="primary" className="mr-sm-2" id="btn-search">Search</Button>
                    <Button variant="dark" className="mr-sm-2" id="btn-admin">Admin</Button>
                </Nav>

            </Navbar>
        </Container>
    );
};

export default Header;