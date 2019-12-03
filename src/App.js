import React from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
// import SignIn from './Components/Signup/SignIn'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      {/* <SignIn /> */}
    </div>

  );
}

export default App;
