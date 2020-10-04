import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Login.css'
const Login = () => {
    return (
        <Container>
            <Image id="login-logo" src={require("../../logos/Group 1329.png")} />
            <p>Login With</p>
        </Container>
    );
};

export default Login;