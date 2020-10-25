import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Toggle from "../Help/Toggle";
import { addHelpList } from "../../actions/helpMeList";
import "./css/GetHelp.css";
import $ from "jquery";
import PatientForm from "./PatientForm";
import StudentForm from "./StudentForm";

const GetHelp = ({ addHelpList }) => {
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
  const [type, setType] = useState("patient");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({...patientData, type})
    addHelpList({...patientData, type});
  };

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.id]: e.target.value });
  };

  const handleFile = async (e) => {
    var FR = new FileReader();
    FR.addEventListener("load",  async function(event){
      setPatientData({ ...patientData, image:event.target.result });
  })
    await FR.readAsDataURL( e.target.files[0]);
  }

  return (
    <div className="get-help-container">
      <div className="bannertext">
        <h1>Need Help</h1>{" "}
        <h2>Enter your details and directly get Help from the Community</h2>
      </div>
      <Toggle help={help} setHelp={setHelp} />
      <form onSubmit={handleSubmit}>
        {help == "patient" ? (
          <PatientForm handleChange={handleChange} handleFile={handleFile} 
          setType={setType}/>
        ) : (
          <StudentForm handleChange={handleChange} handleFile={handleFile}
          setType={setType} />
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

export default connect(null, { addHelpList })(GetHelp);
