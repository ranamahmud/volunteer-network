import React from 'react';
import { Image } from 'react-bootstrap';
import './Event.css'
const Event = ({ event }) => {
    const cancelEvent = (e, id) => {
        e.persist();
        console.log("button clicked")
        fetch('https://vast-waters-59392.herokuapp.com/event/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then(result => {
                console.log(result);
                if (result) {
                    document.getElementById(id).style.display = "none";
                }
            })
    }


    return (
        <div className="col-md-6" id="event" id={event._id}>
            <div className="row">
                <div className="col-md-4"> <Image src={require(`../../images/${event.pic}`)} fluid /></div>
                <div className="col-md-4">
                    <h1>{event.name}</h1>
                    <p>{event.activityDate}</p>
                    <button onClick={(e) => cancelEvent(e, event._id)}>Cancel</button>

                </div>
            </div>
        </div >
    );
};

export default Event;