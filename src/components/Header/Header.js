import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <Container id="header">
            <Navbar bg="light" variant="light">
                <Link className="navbar-brand" to="/">
                    <Image id="logo" src={require("../../logos/Group 1329.png")} />
                </Link>
                <Nav className="ml-auto">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="#features">Destination</Link>
                    <Link className="navbar-brand" to="/event-tasks">Events</Link>
                    <Link className="navbar-brand" to="#pricing">Blog</Link>

                    <Button variant="primary" className="mr-sm-2" id="btn-search">Search</Button>
                    <Link to="/admin-view-event"> <Button variant="dark" className="mr-sm-2" id="btn-admin">Admin</Button></Link>
                </Nav>

            </Navbar>
        </Container>
    );
};

export default Header;