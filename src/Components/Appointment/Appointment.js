import React, { Component } from 'react'
// import './Appoint.js';
import './Appointment.css';
export default class Appointment extends Component {
  render() {
    return (
      <div className="inner-layer">
        <div className="container">
          <div className="row no-margin">
            <div className="col-sm-7">
              <div className="content">
                <h1>Book You Slot Now and Save your time</h1>
                <p>Dunia Daari Maa chuda Ri isse daal do bhosde me </p>
                <h2>For Help Call : chuda</h2>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-data">
                <div className="form-head">
                  <h2>Book Appointemnt</h2>
                </div>
                <div className="form-body">
                  <div className="row form-row">
                    <input
                      type="text"
                      placeholder="Enter Full name"
                      className="form-control"
                    />
                  </div>
                  <div className="row form-row">
                    <input
                      type="text"
                      placeholder="Enter Mobile Number"
                      className="form-control"
                    />
                  </div>
                  <div className="row form-row">
                    <input
                      type="text"
                      placeholder="Enter Email Adreess"
                      className="form-control"
                    />
                  </div>
                  <div className="row form-row">
                    <input
                      id="dat"
                      type="text"
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
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}



// <!doctype html>
// <html lang="en">
//   <head>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//     <link rel="stylesheet" href="assets/css/bootstrap.min.css">
//     <link rel="stylesheet" href="assets/css/datepicker.css">
//     <link rel="stylesheet" href="assets/css/style.css">
//   </head>

//     <body>
// <div class="inner-layer">
//     <div class="container">
//       <div class="row no-margin">
//           <div class="col-sm-7">
//               <div class="content">
//                   <h1>Book You Slot Now and Save your time</h1>
//                   <p>Dunia Daari Maa chuda Ri isse daal do bhosde me </p>
//                   <h2>For Help Call : chuda</h2>
//               </div>
//           </div>
//           <div class="col-sm-5">
//               <div class="form-data">
//                   <div class="form-head">
//                       <h2>Book Appointemnt</h2>
//                   </div>
//                   <div class="form-body">
//                       <div class="row form-row">
//                         <input type="text" placeholder="Enter Full name" class="form-control">
//                       </div>
//                       <div class="row form-row">
//                         <input type="text" placeholder="Enter Mobile Number" class="form-control">
//                       </div>
//                        <div class="row form-row">
//                         <input type="text" placeholder="Enter Email Adreess" class="form-control">
//                       </div>
//                      <div class="row form-row">
//                         <input id="dat" type="text" placeholder="Appointment Date" class="form-control">
//                       </div>

//                       <h6>Address Details</h6>

//                        <div class="row form-row">
//                           <div class="col-sm-6">
//                              <input type="text" placeholder="Enter Area" class="form-control">
//                           </div>
//                           <div class="col-sm-6">
//                              <input type="text" placeholder="Enter City" class="form-control">
//                           </div>
//                       </div>
//                        <div class="row form-row">
//                           <div class="col-sm-6">
//                              <input type="text" placeholder="Enter State" class="form-control">
//                           </div>
//                           <div class="col-sm-6">
//                              <input type="text" placeholder="Postal Code" class="form-control">
//                           </div>
//                       </div>

//                        <div class="row form-row">
//                          <button class="btn btn-success btn-appointment">
//                            Book Appointment
//                          </button>

//                       </div>

//                   </div>
//               </div>
//           </div>
//       </div>
//     </div>
// </div>

//     </body>

//     <!-- Optional JavaScript -->
//     <!-- jQuery first, then Popper.js, then Bootstrap JS -->
//     <script src="assets/js/jquery-3.3.1.min.js"></script>
//     <script src="assets/js/popper.min.js"></script>
//     <script src="assets/js/bootstrap.min.js"></script>
//     <script src="assets/js/bootstrap-datepicker.js"></script>

//     <script>
// $(document).ready(function () {
//   $("#dat").datepicker();
// })
//     </script>

//   </body>
// </html>