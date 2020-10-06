import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Nav, Navbar, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://vast-waters-59392.herokuapp.com/getAllEvents/')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])

    const deleteEvent = (e, id) => {
        e.persist();
        console.log("button clicked")
        fetch('https://vast-waters-59392.herokuapp.com/event/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then(result => {
                console.log(result);
                if (result) {
                    document.getElementById(id).style.display = "none";
                }
            })
    }
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
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Registration Date</th>
                                        <th>Volunteer list</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        events.map(event =>
                                            <tr id={event._id}>
                                                <td>{event.userName}</td>
                                                <td>{event.email}</td>
                                                <td>{event.activityDate}</td>
                                                <td>{event.name}</td>
                                                <td><button onClick={(e) => deleteEvent(e, event._id)}>Delete</button></td>
                                            </tr>
                                        )
                                    }


                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div >
    );
};

export default Admin;