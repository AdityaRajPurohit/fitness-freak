import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import './Appointment.css';


export default class Appointment extends Component {

  render() {
    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('gmail', 'template_dBpAyXUG', e.target, 'user_zCYH9VXiAL1qbKPuFCDsv')
        .then((result) => {
          console.log(result.text);

        }, (error) => {
          console.log(error.text);
        });
    }

    return (
      <div className="inner-layer" style={{ width: "90rem" }}>
        <div className="container">
          <div className="row no-margin">
            <div className="col-sm-7">
              <div className="content">
                <h3 className="teal-text">Book You Slot Now and Save your time</h3>
                <p className="text-danger">Get a Free Heatlh Checkup for first time user</p>
                <h5 className="teal-text">For Help Call(Dr. Shubham Sharma) : 7714172214</h5>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-data">
                <div className="form-head">
                  <h2 className="blue-grey-text">Book Appointment</h2>
                </div>
                <form onSubmit={sendEmail}>
                  <div className="form-body">
                    <div className="row form-row">
                      <input name="Name"
                        type="text"
                        placeholder="Enter Full name"
                        className="form-control"
                      />
                    </div>
                    <div className="row form-row">
                      <input name="mobile"
                        type="text"
                        placeholder="Enter Mobile Number"
                        className="form-control"
                      />
                    </div>
                    <div className="row form-row">
                      <input name="to_email"
                        type="text"
                        placeholder="Enter Email Adreess"
                        className="form-control"
                      />
                    </div>
                    <div className="row form-row">
                      <input name="date"
                        id="dat"
                        type="date"
                        placeholder="Appointment Date"
                        className="form-control"
                      />
                    </div>
                    <h6>Address Details</h6>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          placeholder="Enter Area"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          placeholder="Enter City"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row form-row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          placeholder="Enter State"
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          placeholder="Postal Code"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row form-row">
                      <button className="btn btn-success btn-appointment">
                        Book Appointment
              </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}