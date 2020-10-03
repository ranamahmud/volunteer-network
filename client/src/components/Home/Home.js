import React from 'react';
import Task from '../Task/Task';

const tasks = [
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        name: 'Animal Support',
        pic: 'animalShelter.png'
    },
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    }
]
const Home = () => {
    return (
        <div className="row">
            <h1>This is home</h1>

            {
                tasks.map(task => <Task task={task}></Task>)
            }
        </div>
    );
};

export default Home;