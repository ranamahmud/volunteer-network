import React, { useState } from 'react';
import { Button, Col, Container, Form, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'

const AddAdmin = () => {
    const [activityDate, setActivityDate] = useState(new Date());
    const [activity, setActivity] = useState({});

    const handleBlur = (e) => {
        let isFieldValid = true;


        if (e.target.id === "activityDescription") {
            isFieldValid = e.target.value.trim().length > 0;
        }

        if (e.target.id === "name") {
            isFieldValid = e.target.value.trim().length > 0;
        }

        if (isFieldValid) {
            activity[e.target.id] = e.target.value;
            setActivity(activity);
        }

    }

    const handleAddEvent = (e) => {

        console.log(activity);
        fetch('http://localhost:5000/addActivity', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(activity),
        })
            .then(res => {
                console.log("success");
                // history.push('/event-tasks');
            })
        // history.push("/event-tasks")
        e.preventDefault();
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

                            <Form onSubmit={handleAddEvent}>

                                <div id="create-form-item">
                                    <p>
                                        Add Event
    </p>


                                    <Form.Group controlId="name">
                                        <Form.Label>Event Title</Form.Label>
                                        <Form.Control type="text" placeholder="Organize books at the library." onBlur={handleBlur} required />

                                    </Form.Group>

                                    <Form.Group controlId="activityDescription">
                                        <Form.Label>Event Description</Form.Label>
                                        <Form.Control type="text" placeholder="Description" onBlur={handleBlur} required />

                                    </Form.Group>


                                    <Form.Group controlId="formBasicDate">

                                        <DatePicker className="form-control" selected={activityDate} onChange={date => setActivityDate(date)} />

                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
  </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default AddAdmin;