import React from 'react';

const Task = ({ task }) => {
    return (
        <div>
            <img src={require(`../../images/${task.pic}`)} alt="" />
        </div>
    );
};

export default Task;