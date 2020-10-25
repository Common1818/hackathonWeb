import React from "react";

const StudentForm = ({ handleChange, handleFile, setType }) => {
  return (
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
          <div class="card-background student"></div>
          <div class="card-block">
          <label htmlFor="file-upload">
              <input id="file-upload" type='file' onChange={handleFile} style={{visibility:"hidden"}}/>
            <img
              class="avatar"
              src="https://www.svgrepo.com/show/52761/image.svg"
              alt="Avatar"
            />
            </label>
            <h3 class="card-title">
              <input
                onChange={handleChange}
                type="text"
                placeholder="Student's Name"
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
                    Problem :{" "}
                    <input
                      onChange={handleChange}
                      placeholder="Financial Problem etc."
                      type="text"
                      id="problem"
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
                      src="https://www.svgrepo.com/show/288206/school.svg"
                      alt=""
                    ></img>{" "}
                    <textarea
                      placeholder="Enter School's name and address"
                      onChange={()=> {
                        setType("students")
                        handleChange()
                      }}
                      id="school"
                      cols="20"
                      rows="3"
                      required
                    ></textarea>
                  </span>
                  <span>
                    <img
                      width="20px"
                      src="https://www.svgrepo.com/show/309431/class.svg"
                      alt=""
                    ></img>{" "}
                    <input
                      type="text"
                      placeholder="Class"
                      onChange={handleChange}
                      id="Class"
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
            <h4>Student Details</h4>
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
                  placeholder="email"
                  required
                  type="email"
                  onChange={handleChange}
                  id="email"
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
  );
};

export default StudentForm;
