import React from "react";
import "./css/BeCovidWarrior.css";
import DoHelp from "./images/DoHelp.jpg";

const BeCovidWarriror = () => {
  return (
    <section class="homeMid">
      <h1 class="DoHelp">Be A Covid Warrior</h1>
      <div class="banner-container">
        <img src={DoHelp} style={{ marginRight: "1rem" }}></img>
        <div class="paras">
          <p>
            Survived COVID-19? Help others to do the same by donating the Plasma
          </p>
          <p>
            Help those who can't study for their boards due to non-availability
            of teachers at online platforms{" "}
          </p>
          <a href="#" style={{ float: "right", color: "rgb(45, 167, 238)" }}>
            Be a covid warrior
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeCovidWarriror;
