import React, { useEffect, useState } from "react";
import { getHelpList } from "../../actions/helpMeList";
import { connect } from "react-redux";
import HealthCard from "../HealthCard/HealthCard";
import StudentCard from "../StudentCard/StudentCard";
import Toggle from "./Toggle";

const HelpOthers = ({ patients, getHelpList, students }) => {
  useEffect(() => {
    getHelpList();
  }, []);

  const [help, setHelp] = useState("patient");

  return (
    <div className="content-wrapper">
      <Toggle help={help} setHelp={setHelp} />
      {help == "patient" ? (
        <HealthCard patients={patients} num={6} />
      ) : (
        <StudentCard students={students} num={6} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  patients: state.helpMe.patients,
  students: state.helpMe.students,
});

export default connect(mapStateToProps, { getHelpList })(HelpOthers);
