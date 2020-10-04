import React, { useContext, useState } from 'react';
import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import './CreateAccount.css'
import DatePicker from 'react-datepicker'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
const CreateAccount = (props) => {
    const { name, color, pic } = props.location.state;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [activity, setActivity] = useState({});
    const [activityDate, setActivityDate] = useState(new Date());

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.id === "userName") {
            isFieldValid = e.target.value.trim().length > 0;
        }

        if (e.target.id === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }


        if (e.target.id === "activityDescription") {
            isFieldValid = e.target.value.trim().length > 0;
        }

        if (e.target.id === "name") {
            isFieldValid = e.target.value.trim().length > 0;
        }

        if (isFieldValid) {
            const newActivityInfo = {
                userName: loggedInUser.userName, email: loggedInUser.email,
                name: name,
                color: color,
                pic: pic,
                activityDate: activityDate
            };
            newActivityInfo[e.target.id] = e.target.value;
            setActivity(newActivityInfo);
            console.log(newActivityInfo);
        }

    }
    const handleAddActivity = (e) => {
        console.log(activity);
        fetch('http://localhost:5000/addActivity', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(activity),
        })
        e.preventDefault();
    }
    return (
        <Container>
            <Row>
                <Link id="create-logo" to="/">
                    <Image src={require("../../logos/Group 1329.png")} />

                </Link>
            </Row>
            <Row id="create-form">
                <Form onSubmit={handleAddActivity}>

                    <div id="create-form-item">
                        <p>
                            Register as a Volunteer
    </p>
                        <Form.Group controlId="userName">

                            <Form.Control type="text" placeholder="Full Name" defaultValue={loggedInUser.userName} onBlur={handleBlur} required />

                        </Form.Group>

                        <Form.Group controlId="email">

                            <Form.Control type="email" placeholder="Username or Email" defaultValue={loggedInUser.email} onBlur={handleBlur} required />

                        </Form.Group>
                        <Form.Group controlId="formBasicDate">

                            <DatePicker className="form-control" selected={activityDate} onChange={date => setActivityDate(date)} />

                        </Form.Group>
                        <Form.Group controlId="activityDescription">

                            <Form.Control type="text" placeholder="Description" onBlur={handleBlur} required />

                        </Form.Group>
                        <Form.Group controlId="name">

                            <Form.Control type="text" placeholder="Organize books at the library." defaultValue={name} onBlur={handleBlur} required />

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