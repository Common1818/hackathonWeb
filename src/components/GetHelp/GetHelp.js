import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addPatient } from "../../actions/data";
import "./css/GetHelp.css";
import $ from "jquery";

const GetHelp = ({ addPatient }) => {
  useEffect(() => {
    $(function () {
      // For card rotation
      $(".btn-rotate").click(function () {
        $(".card-front").toggleClass(" rotate-card-front");
        $(".card-back").toggleClass(" rotate-card-back");
      });
    });
  });

  const [patientData, setPatientData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(patientData);
    addPatient(patientData);
  };

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.id]: e.target.value });
  };

  return (
    <div className="get-help-container">
      <form onSubmit={handleSubmit}>
        <div className={`col-md-7`}>
          <div class="rotate-container" style={{ marginTop: "20px" }}>
            <div class="card card-front text-center">
              <div class="card-header">
                <p>
                  <img
                    style={{ width: "20px" }}
                    src="https://www.svgrepo.com/show/7071/hospital.svg"
                    alt=""
                  ></img>
                </p>
              </div>
              <div class="card-background"></div>
              <div class="card-block">
                <img
                  class="avatar"
                  src="https://www.svgrepo.com/show/52761/image.svg"
                  alt="Avatar"
                />
                <h3 class="card-title">
                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Patient's Name"
                    id="name"
                  />
                </h3>
                <div class="needs">
                  <ul>
                    <li class="flex">
                      <span
                        style={{
                          fontWeight: "700",
                          borderBottom: "2px solid red",
                        }}
                      >
                        Needs :{" "}
                        <input
                          onChange={handleChange}
                          placeholder="Plasma/Blood etc."
                          type="text"
                          id="needs"
                        />{" "}
                      </span>
                      <span>
                        <img
                          width="20px"
                          src="https://www.svgrepo.com/show/204334/location.svg"
                          alt=""
                        ></img>{" "}
                        <input
                          type="text"
                          placeholder="City"
                          onChange={handleChange}
                          id="city"
                        />
                      </span>
                    </li>
                    <li class="flex">
                      <span style={{ width: "200px", display: "flex" }}>
                        {" "}
                        <img
                          width="20px"
                          src="https://www.svgrepo.com/show/206349/location-hotel.svg"
                          alt=""
                        ></img>{" "}
                        <textarea
                          placeholder="Enter Hospital's name and address"
                          onChange={handleChange}
                          id="hospital"
                          cols="20"
                          rows="3"
                        ></textarea>
                      </span>
                      <span>
                        <img
                          width="20px"
                          src="https://www.svgrepo.com/show/163600/blood.svg"
                          alt=""
                        ></img>{" "}
                        <input
                          type="text"
                          placeholder="Bloog Grp."
                          onChange={handleChange}
                          id="bloodGroup"
                        />
                      </span>
                    </li>
                    <li class="flex"></li>
                  </ul>
                </div>
                <button onClick={() => {}} class="btn btn-primary btn-rotate">
                  Details <i class="fa fa-long-arrow-right"></i>
                </button>
              </div>
            </div>
            <div class="card card-back text-center">
              <div class="card-header">
                <p>
                  <img
                    style={{ width: "20px" }}
                    src="https://www.svgrepo.com/show/7071/hospital.svg"
                    alt=""
                  ></img>
                </p>
              </div>
              <div class="card-block">
                <h4>Patient Details</h4>
                <p>
                  <textarea
                    placeholder="Enter Detailed description here"
                    onChange={handleChange}
                    id="description"
                    cols="30"
                    rows="3"
                  ></textarea>
                </p>
                <h4>Contact</h4>
                <ul class="social-links list-unstyled d-flex justify-content-center">
                  <li>
                    <input
                      placeholder="WhatsApp Number"
                      required
                      type="text"
                      onChange={handleChange}
                      id="whatsapp"
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Mobile Number"
                      required
                      type="text"
                      onChange={handleChange}
                      id="phone"
                    />
                  </li>
                  <li>
                    <input
                      placeholder="instagram Username"
                      type="text"
                      onChange={handleChange}
                      id="instagram"
                    />
                  </li>
                </ul>
                <button class="btn btn-primary btn-rotate">
                  {" "}
                  <i class="fa fa-long-arrow-left"> </i>&nbsp; Back{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          style={{ margin: "40px" }}
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addPatient })(GetHelp);
