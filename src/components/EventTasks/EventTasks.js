import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Event from '../Event/Event';
import Header from '../Header/Header';

const EventTasks = () => {
    return (
        <Container>
            <Header />
            <div className="row">
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
            </div>
        </Container>
    );
};

export default EventTasks;