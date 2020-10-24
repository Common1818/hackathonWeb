import React, { useEffect } from "react";
import $ from "jquery";
import "./css/HealthCard.css";

const HealthCard = ({ patients, num }) => {

  useEffect(() => {
    $(function () {
      // For card rotation
      $(".btn-rotate").click(function () {
        $(".card-front").toggleClass(" rotate-card-front");
        $(".card-back").toggleClass(" rotate-card-back");
      });
    });
  });
  
  return (
    <div className="row">
      {patients &&
        patients.map((info) => {
          const {
            name,
            city,
            hospital,
            needs,
            bloodGroup,
            description,
            phone,
            whatsapp,
            instagram,
          } = info;
          return (
            <div className={`col-md-` + num}>
              <div class="rotate-container" style={{ marginTop: "20px" }}>
                <div class={`card card-front text-center`}>
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
                      src="https://userstock.io/data/wp-content/uploads/2017/09/bewakoof-com-official-245573-939x1024.jpg"
                      alt="Avatar"
                    />
                    <h3 class="card-title">{name}</h3>
                    <div class="needs">
                      <ul>
                        <li class="flex">
                          <span
                            style={{
                              fontWeight: "700",
                              borderBottom: "2px solid red",
                            }}
                          >
                            Needs : {needs}{" "}
                          </span>
                          <span>
                            <img
                              width="20px"
                              src="https://www.svgrepo.com/show/204334/location.svg"
                              alt=""
                            ></img>{" "}
                            {city}
                          </span>
                        </li>
                        <li class="flex">
                          <span style={{ width: "200px" }}>
                            {" "}
                            <img
                              width="20px"
                              src="https://www.svgrepo.com/show/206349/location-hotel.svg"
                              alt=""
                            ></img>{" "}
                            {hospital}
                          </span>
                          <span>
                            <img
                              width="20px"
                              src="https://www.svgrepo.com/show/163600/blood.svg"
                              alt=""
                            ></img>{" "}
                            {bloodGroup}
                          </span>
                        </li>
                        <li class="flex"></li>
                      </ul>
                    </div>
                    <button
                      onClick={() => {}}
                      class="btn btn-primary btn-rotate"
                    >
                      Details &nbsp; <i class="fa fa-long-arrow-right"></i>
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
                    <p>{description}</p>
                    <h4>Contact</h4>
                    <ul class="social-links list-unstyled d-flex justify-content-center">
                      <li>
                        <a href="#" target="_blank">
                          <i class="fa fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a href={`tel:` + phone} target="_blank">
                          <i class="fa fa-phone"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://instagram.com/` + instagram}
                          target="_blank"
                        >
                          <i class="fa fa-instagram"></i>
                        </a>
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
          );
        })}
    </div>
  );
};

export default (HealthCard);
