import React, { useEffect } from "react";
import { getHelpList } from '../../actions/helpMeList'
import { connect } from "react-redux";
import HealthCard from "../HealthCard/HealthCard";

const HelpOthers = ({ patients, getHelpList }) => {
  useEffect(()=>{
    getHelpList();
  },[])


  return (
    <div className="content-wrapper">
      <HealthCard patients={patients} num={6} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  patients: state.helpMe.patients,
});

export default connect(mapStateToProps, {getHelpList})(HelpOthers);