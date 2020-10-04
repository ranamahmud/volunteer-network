import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import EventHome from '../EventHome/EventHome';
import Header from '../Header/Header';
import Task from '../Task/Task';
import './Home.css'
const tasks = [
    {
        name: 'Child Support',
        pic: 'childSupport.png',
        color: 'FFBD3E'
    },
    {
        name: 'Refuge Shelter',
        pic: 'refuseShelter.png',
        color: 'FF7044'
    },
    {
        name: 'Food Charity',
        pic: 'foodCharity.png',
        color: '3F90FC'
    },
    {
        name: 'Host a clothing swap.',
        pic: 'clothSwap.png',
        color: '421FCF'
    },
    {
        name: 'Host a river clean-up',
        pic: 'riverClean.png',
        color: '3F90FC'

    },
    {
        name: 'Clean water for children',
        pic: 'cleanWater.png',
        color: '421FCF'
    },

    {
        name: 'Good Education',
        pic: 'goodEducation.png',
        color: 'FFBD3E'
    },
    {
        name: 'New books for children',
        pic: 'newBooks.png',
        color: 'FF7044',
        color: 'FF7044'

    },
    {
        name: 'Host a study group',
        pic: 'studyGroup.png',
        color: 'FFBD3E'
    },
    {
        name: 'Build birdhouses for your neighbors',
        pic: 'birdHouse.png',
        color: '3F90FC'
    },
    {
        name: 'Organize books at the library',
        pic: 'libraryBooks.png',
        color: 'FF7044'

    },
    {
        name: 'Give a seminar on driving safety',
        pic: 'driveSafety.png',
        color: '421FCF'
    },
    {
        name: 'Give free music lessons.',
        pic: 'musicLessons.png',
        color: '421FCF'
    },
    {
        name: 'Teach people how to register vote',
        pic: 'voteRegister.png',
        color: 'FFBD3E'
    },
    {
        name: 'Clean up your local park.',
        pic: 'clearnPark.png',
        color: '3F90FC'
    },
    {
        name: 'Give IT help to local adults',
        pic: 'ITHelp.png',
        color: 'FF7044'

    },
    {
        name: 'Foster a shelter animal.',
        pic: 'animalShelter.png',
        color: 'FFBD3E'
    },
    {
        name: 'Babysit during PTA meetings.',
        pic: 'babySit.png',
        color: '3F90FC'
    },
    {
        name: 'Collect stuffed animals.',
        pic: 'stuffedAnimals.png',
        color: 'FF7044'
    },
    {
        name: 'Collect school supplies',
        pic: 'schoolSuffiles.png',
        color: '421FCF'
    },
]
const Home = () => {
    return (
        <Container>
            <Header />
            <Container>
                <h1 id="home-title">I grow by helping people in need. </h1>
            </Container>
            <Form inline id="home-form">
                <FormControl type="text" placeholder="Search" />
                <Button id="home-btn-search">Search</Button>
            </Form>
            <div className="row" style={{
                paddingTop: "200px"
            }}>
                {
                    tasks.map(task => <Task task={task}></Task>)
                }
            </div>
        </Container>
    );
};

export default Home;