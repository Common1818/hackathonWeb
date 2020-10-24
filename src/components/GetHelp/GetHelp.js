import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Toggle from "../Help/Toggle";
import { addPatient } from "../../actions/data";
import "./css/GetHelp.css";
import $ from "jquery";
import PatientForm from "./PatientForm";
import StudentForm from "./StudentForm";

const GetHelp = ({ addPatient }) => {
  const [help, setHelp] = useState("patient");
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
      <div className="bannertext">
        <h1>Need Help</h1>{" "}
        <h2>Enter your details and directly get Help from the Community</h2>
      </div>
      <Toggle help={help} setHelp={setHelp} />
      <form onSubmit={handleSubmit}>
        {help == "patient" ? (
          <PatientForm handleChange={handleChange} />
        ) : (
          <StudentForm handleChange={handleChange} />
        )}

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
