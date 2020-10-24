import React, { useState } from "react";
import "./css/Toggle.css";
import patient from "./images/helpPatient.PNG";
import student from "./images/helpStudent.PNG";

const Toggle = ({ help, setHelp }) => {
  return (
    <div className="toggle-container">
      <img
        style={
          help != "patient"
            ? { filter: "brightness(70%" }
            : { filter: "brightness(100%" }
        }
        src={patient}
        alt=""
      />
      <div class="display">
        <label class="label toggle">
          <input
            onChange={(e) => {
              help == "patient" ? setHelp("student") : setHelp("patient");
            }}
            type="checkbox"
            class="toggle_input"
          />
          <div class="toggle-control"></div>
        </label>
      </div>
      <img
        style={
          help == "patient"
            ? { filter: "brightness(70%" }
            : { filter: "brightness(100%" }
        }
        src={student}
        alt=""
      />
    </div>
  );
};

export default Toggle;
