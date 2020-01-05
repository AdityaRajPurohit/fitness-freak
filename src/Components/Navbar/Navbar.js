import React, { Component } from 'react'
import logo from './logo.png';
import './Navbar.css'
import { NavLink, BrowserRouter } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <div className="Nav-container shadow-lg">
                <header>
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="logo" />

                    </div>

                    <nav>
                        <BrowserRouter>
                            <ul className="nav-links">
                                <NavLink to="/BMI">
                                    <li className="nav-link" >
                                        BMI
                                    </li>
                                </NavLink>
                                <NavLink to="/Appointment">
                                    <li className="nav-link"  >
                                        Appointment
                                    </li>
                                </NavLink>
                                <NavLink to="/News">
                                    <li className="nav-link" >
                                        News
                                        {console.log("News")}
                                    </li>
                                </NavLink>
                                <NavLink to="/Recipe">
                                    <li className="nav-link"  >
                                        Nutrition
                                    </li>
                                </NavLink>
                                <NavLink to="/Signin">
                                    <li className="nav-link" >
                                        SingIn/SignUp
                                    </li>
                                </NavLink>
                            </ul>
                        </BrowserRouter>
                    </nav>
                </header>
            </div>


        );
    };
}