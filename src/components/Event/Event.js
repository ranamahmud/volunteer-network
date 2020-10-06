import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import './Event.css'
const Event = ({ event }) => {
    console.log(event);
    const cancelEvent = () => {
        console.log("button clicked")
    }
    const task = { pic: "babySit.png" }
    return (
        <div className="col-md-6" id="event">
            <div className="row">
                <div className="col-md-4"> <Image src={require(`../../images/${event.pic}`)} fluid /></div>
                <div className="col-md-4">
                    <h1>{event.name}</h1>
                    <p>{event.activityDate}</p>
                    <button onClick={cancelEvent}>Cancel</button>

                </div>
            </div>
        </div>



    );
};

export default Event;