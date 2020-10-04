import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <div class="alert alert-danger" role="alert">
                <h1>The page you are looking for does not exist</h1>
            </div>
            <Link to="/" class="btn btn-primary">Go back to home</Link>

        </Container>
    );
};

export default NotFound;