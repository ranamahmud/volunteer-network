import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import Event from '../Event/Event';
import Header from '../Header/Header';

const EventTasks = () => {
    const [events, setEvents] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/getEvents/' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [loggedInUser.email])

    return (
        <Container>
            <Header />
            <div className="row">
                {
                    events.map(event => <Event event={event} />)
                }
            </div>
        </Container>
    );
};

export default EventTasks;