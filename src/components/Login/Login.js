import React, { useContext } from 'react';
import { Button, Container, Form, Image, Row } from 'react-bootstrap';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

const Login = () => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } }
    const { productKey } = useParams();

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const googleSignIn = (e) => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true
                };

                console.log(signedInUser)
                setLoggedInUser(signedInUser);
                console.log(from)
                history.replace(from);


            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })

        e.preventDefault();
    }


    return (

        <Container>
            <Row id="login-logo">
                <Image src={require("../../logos/Group 1329.png")} />
            </Row>
            <Row id="login-form">
                <Form >

                    <div id="login-form-item">
                        <p>
                            Login with
    </p>
                        <button variant="light" type="button" onClick={googleSignIn}>
                            <img src={require("../../logos/google.png")} alt="" />
                            Continue with Google
  </button>
                        <h1>Don’t have an account? Create an account</h1>
                    </div>
                </Form>
            </Row>
        </Container>
    );
};

export default Login;