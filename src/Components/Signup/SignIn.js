import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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
            <div className="App" >
                {this.state.isSignedIn ?
                    (

                        <span >
                            {console.log("SignIn")}
                            <div>Signed In</div>
                            <button onClick={() => firebase.auth().signOut()}>Sign Out </button>
                            <h1> Welcome {firebase.auth().currentUser.displayName}</h1>
                            <img alt="pic" src={firebase.auth().currentUser.photoURL} />
                        </span>
                    )
                    :
                    (
                        <StyledFireBaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    )
                }
            </div>
        );
    }
}

export default App;
