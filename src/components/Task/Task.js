import React from 'react';
import { Card } from 'react-bootstrap';
import './Task.css'
const Task = ({ task }) => {
    return (
        <div className="col-md-3" style={{ paddingTop: "30px" }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require(`../../images/${task.pic}`)} />
                <Card.Body style={{ backgroundColor: '#' + task.color }}>
                    <Card.Text>
                        {task.name}
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>



    );
};

export default Task;