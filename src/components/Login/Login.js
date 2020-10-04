import React from 'react';
import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import './Login.css'
const Login = () => {
    return (
        <Container>
            <Row id="login-logo">
                <Image src={require("../../logos/Group 1329.png")} />
            </Row>
            <Row id="login-form">
                <Form >

                    <div id="login-form-item">
                        <p>
                            Login with
    </p>
                        <Button variant="light" type="submit">
                            Continue with Google
  </Button>
                    </div>
                </Form>
            </Row>
        </Container>
    );
};

export default Login;