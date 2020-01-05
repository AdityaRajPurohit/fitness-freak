import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './signIn.css';

firebase.initializeApp({
    apiKey: "AIzaSyAdm-mZ7SsExdjtFRGmySzEpodufKhgMsY",
    authDomain: "fitness-freak-a8927.firebaseapp.com"
})

class App extends Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user);
        })

    }
    render() {
        return (
            <div className="box d-flex justify-content-center">

                {this.state.isSignedIn ?
                    (
                        <div className="card" >
                            <div className="row no-gutters">
                                <div className="col-md-6" >
                                    <img src={firebase.auth().currentUser.photoURL} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h1 className="card-title"> Welcome {firebase.auth().currentUser.displayName}</h1>
                                        <p className="card-text">
                                            Welcome to the Fitness-Freak, Stay Healthy stay fit, Stay active.</p>
                                        <p className="card-text">Last Log in on : {firebase.auth().currentUser.metadata.lastSignInTime}</p>
                                        <p className="card-text">
                                            Email id: {firebase.auth().currentUser.email}
                                        </p>
                                        <p className="card-text">
                                            Verified User: {firebase.auth().currentUser.emailVerified ? "Account is verified" : "Verification Pending"}
                                        </p>
                                        <BrowserRouter>
                                            <NavLink to="/News">
                                                <button onClick={() => firebase.auth().signOut()} href="/News" className="btn btn-primary">Sign Out</button>
                                            </NavLink>
                                        </BrowserRouter>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                    :
                    (
                        <div className="card" >
                            <div className="row no-gutters">
                                <div className="col-md-6" >
                                    <img src={require("./1.jpg")} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title">Log In</h5>
                                        <StyledFireBaseAuth
                                            uiConfig={this.uiConfig}
                                            firebaseAuth={firebase.auth()}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        );
    }
}

export default App;
