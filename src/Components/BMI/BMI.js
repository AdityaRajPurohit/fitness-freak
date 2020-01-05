import React, { Component } from 'react'
import './BMI.css';
export default class BMI extends Component {
    getbmivalue(e) {
        console.log("Function Called");
        var weight = document.getElementById('weight').value;
        var height = document.getElementById('height').value;
        //Height ko meter me convert karne ke liye
        console.log(height, " ", weight);
        height = height / 3.281;
        // weight = weight * 0.025;

        var newbmivalue = weight / (height * height);
        console.log(newbmivalue)
        newbmivalue = Math.round(newbmivalue);
        console.log(newbmivalue)
        document.getElementById('bmivalue').value = newbmivalue;
        setTimeout(() => {
            console.log("we waited 204586560000 ms to run this code, oh boy wowwoowee!");
        }, 10000);
        return false;
    }
    render() {
        return (
            <div className="bmi-div">
                <div className="container">

                    <div className=" text-center">BMI Calculator</div>
                    <div className="card-body">

                        <form className="w-50 m-auto" onSubmit={this.getbmivalue.bind(this)}>
                            <div className="form-group">
                                <label>Weight</label>
                                <input type="number" name="" placeholder="Weight in KG" required id="weight" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Height</label>
                                <input type="text" name="" placeholder="Height in Feet" required id="height" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>BMI Value</label>
                                <input type="number" name="BMI Value" id="bmivalue" className="form-control" />
                            </div>
                            <div className="button">
                                <button type="submit" className="btn btn-success ">Check BMI</button>
                            </div>
                        </form>

                    </div>
                    <div className=" text-center">A perfect or healthy BMI ranges between 19 to 25.</div>
                </div>
            </div>
        )
    }
}