import React, { Component } from 'react'
import './News.css';
import './app';
export default class News extends Component {
    render() {
        return (

            <div className="box d-flex flex-column justify-content-around">
                <div >
                    <h4 className="teal-text">Welcome To Fitness Freak Health News</h4>
                    <div className="row">
                        <div id="newsResults" />
                    </div>
                    <div id="loader">
                        <div className="progress">
                            <div className="indeterminate" />
                        </div>
                    </div>
                </div>;

            </div>
        )
    }
}

