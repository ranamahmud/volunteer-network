import React from 'react';
import { Container, Image } from 'react-bootstrap';
const CreateAccount = () => {
    return (
        <Container>
            <Image id="login-logo" src={require("../../logos/Group 1329.png")} />
            <p>Login With</p>
        </Container>
    );
};

export default CreateAccount;