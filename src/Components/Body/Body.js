import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Appointment from './../Appointment/Appointment';
import BMI from './../BMI/BMI';
import News from '../News/News';
import Recipe from './../Recipe/Recipe';
import SignIn from './../Signup/SignIn';

export default class Body extends Component {

    render() {
        return (
            <BrowserRouter>

                <img className="big-circle" src={require("./Assets/big-eclipse.svg")} alt="big-eclipse" />
                <img className="mid-circle" src={require("./Assets/mid-eclipse.svg")} alt="mid-eclipse" />
                <img className="small-circle" src={require("./Assets/small-eclipse.svg")} alt="small-eclipse" />
                <Switch>
                    <Route path="/News" exact component={News} />
                    <Route path="/BMI" component={BMI} />
                    <Route path="/Appointment" component={Appointment} />
                    <Route path="/Recipe" component={Recipe} />
                    <Route path="/Signin" component={SignIn} />
                </Switch>
            </BrowserRouter>

        )
    }
}
