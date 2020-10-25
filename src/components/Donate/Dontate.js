import React from "react";
import "./Donate.css";

const Donate = () => {
  return (
    <div className="donate-container container text-center">
      <h1>Donate directly to PM Covid relief Fund</h1>
      <a href="https://www.pmcares.gov.in/en/web/contribution/donate_india">
        <button className="btn btn-primaery">Donate</button>
      </a>
    </div>
  );
};

export default Donate;
