import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <Container>
                <Navbar bg="light" variant="light">
                    <Link className="navbar-brand" to="/">
                        <Image id="logo" src={require("../../logos/Group 1329.png")} />
                    </Link>
                    <Nav className="mr-auto">
                        <h1>
                            Volunteer register list
                  </h1>
                    </Nav>

                </Navbar>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <Link to="/admin-view-event">Volunteer register list</Link>
                            <br />
                            <Link to="/admin-ad-event">Add event</Link>
                        </Col>
                        <Col xs={9}>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default Admin;