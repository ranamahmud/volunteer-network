import React from 'react';
import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import './Login.css'
const Login = () => {

    const handleSubmit = (e) => {
        // if (newUser && user.email && user.password) {
        //     createUserWithEmailAndPassword(user.name, user.email, user.password)
        //         .then(res => {
        //             handleResponse(res, true);
        //         })
        // }

        // if (!newUser && user.email && user.password) {
        //     signInWithEmailAndPassword(user.email, user.password)
        //         .then(res => {
        //             handleResponse(res, true);
        //         })
        // }
        console.log("form clicked")
        e.preventDefault();
    }
    return (
        <Container>
            <Row id="login-logo">
                <Image src={require("../../logos/Group 1329.png")} />
            </Row>
            <Row id="login-form">
                <Form onSubmit={handleSubmit}>

                    <div id="login-form-item">
                        <p>
                            Login with
    </p>
                        <Button variant="light" type="submit">
                            <img src={require("../../logos/google.png")} alt="" />
                            Continue with Google
  </Button>
                        <h1>Don’t have an account? Create an account</h1>
                    </div>
                </Form>
            </Row>
        </Container>
    );
};

export default Login;