import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import './Event.css'
const Event = () => {
    const task = { pic: "babySit.png" }
    return (
        <div className="col-md-6" id="event">
            <div className="row">
                <div className="col-md-4"> <Image src={require("../../images/babySit.png")} fluid /></div>
                <div className="col-md-4">
                    <h1>Huminity More</h1>
                    <p>Date</p>
                    <button>Cancel</button>

                </div>
            </div>
        </div>



    );
};

export default Event;