import React from 'react';
import { Card } from 'react-bootstrap';

const EventHome = ({ event }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`../../images/${event.pic}`)} />
            <Card.Body>
                <Card.Text>
                    {event.text}
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default EventHome;