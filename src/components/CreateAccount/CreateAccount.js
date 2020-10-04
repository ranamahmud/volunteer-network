import React, { useState } from 'react';
import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import './CreateAccount.css'
import DatePicker from 'react-datepicker'
const CreateAccount = () => {

    const [loggedInUser, setLoggedInUser] = useState({});
    const [taskDate, setTaskDate] = useState(new Date());

    return (
        <Container>
            <Row id="create-logo">
                <Image src={require("../../logos/Group 1329.png")} />
            </Row>
            <Row id="create-form">
                <Form >

                    <div id="create-form-item">
                        <p>
                            Register as a Volunteer
    </p>
                        <Form.Group controlId="formBasicName">

                            <Form.Control type="text" placeholder="Full Name" />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="email" placeholder="Username or Email" />

                        </Form.Group>
                        <Form.Group controlId="formBasicDate">

                            <DatePicker selected={taskDate} onChange={date => setTaskDate(date)} />

                        </Form.Group>
                        <Form.Group controlId="formBasicDescription">

                            <Form.Control type="email" placeholder="Description" />

                        </Form.Group>
                        <Form.Group controlId="formBasicTask">

                            <Form.Control type="email" placeholder="Organize books at the library." />

                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </div>
                </Form>
            </Row>
        </Container>
    );
};

export default CreateAccount;