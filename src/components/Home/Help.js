import React from "react";
import WantHelp from "./images/WantHelp.jpg";
import "./css/Help.css";

const Help = () => {
  return (
    <section class="homeMid" style={{ marginTop: "50px" }}>
      <h1 class="WantHelp">Want Help, Ask India</h1>
      <div class="banner-container">
        <div class="paras">
          <p>
            Ask India, for help and be a covid survivor.. Just like BABA KA
            DHABA{" "}
          </p>
          <p>
            Create a request, explain your problem with videos & images, add
            your contact details and wait for the respons
          </p>
          <a href="#" style={{ float: "left", color: "rgb(45, 167, 238)" }}>
            Ask for help {">>"}
          </a>
        </div>
        <img src={WantHelp} style={{ marginLeft: "1rem" }}></img>
      </div>
    </section>
  );
};

export default Help;
