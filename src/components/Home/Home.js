import React from "react";
import AboutCovid from "./AboutCovid";
import BeCovidWarriror from "./BeCovidWarriror";
import "./css/Home.css";
import Help from "./Help";

const Home = () => {
  var svg1 = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 27 28.59375" style="enable-background:new 0 0 27 22.875;" xml:space="preserve">
									<g>
                  <path d="M26.833,21.373C26.939,21.278,27,21.142,27,21V4c0-0.234-0.163-0.438-0.392-0.488C26.572,3.504,26.351,3.456,26,3.387V17.5   c0,0.827-0.673,1.5-1.5,1.5c-0.009,0-0.147,0.001-0.373,0.006l2.475,2.475C26.686,21.464,26.768,21.432,26.833,21.373z"/><path d="M0.555,21.497C0.578,21.495,2.812,21.25,5.5,21.25c3.521,0,6.21,0.414,7.776,1.197c0.071,0.035,0.147,0.053,0.224,0.053   c0.077,0,0.153-0.018,0.224-0.053c1.566-0.783,4.255-1.197,7.776-1.197c0.217,0,0.425,0.004,0.635,0.007l-1.955-1.955   c-2.018,0.249-4.334,0.703-6.009,1.541C13.964,20.945,13.732,21,13.5,21c-0.232,0-0.464-0.055-0.671-0.158   C9.208,19.031,2.566,19,2.499,19C1.673,19,1,18.327,1,17.5V3.387C0.649,3.456,0.428,3.504,0.392,3.512C0.163,3.563,0,3.766,0,4v17   c0,0.142,0.06,0.278,0.166,0.373C0.273,21.468,0.414,21.514,0.555,21.497z"/><path d="M20.5,10.5c0,1.39-0.409,2.682-1.108,3.771l3.771,3.771C23.967,18.003,24.481,18,24.5,18c0.276,0,0.5-0.224,0.5-0.5v-17   C25,0.224,24.776,0,24.5,0C24.226,0,18.102,0.026,14,1.731v1.794C17.632,3.783,20.501,6.804,20.5,10.5z"/><path d="M14,17.475V17.5h-0.501H13v-0.025c-3.633-0.257-6.501-3.276-6.5-6.975c0-3.697,2.868-6.718,6.5-6.975V1.731   C8.898,0.026,2.774,0,2.5,0C2.224,0,2,0.224,2,0.5v17C2,17.776,2.224,18,2.5,18c0.069,0,6.93,0.024,10.776,1.947   C13.347,19.982,13.423,20,13.5,20c0.077,0,0.153-0.018,0.224-0.053c1.576-0.788,3.655-1.254,5.569-1.533l-2.022-2.022   C16.314,17.005,15.2,17.39,14,17.475z"/><path d="M25.167,22.875l0.707-0.707l-7.794-7.795c0.885-1.045,1.421-2.396,1.42-3.873c0-3.314-2.687-6-6-6   c-3.315,0-5.999,2.687-6,6c0,3.314,2.685,6,6,6c1.477,0,2.827-0.536,3.873-1.42L25.167,22.875z"/></g></svg>`;

  var svg2 = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 8532 8963.75"
                                x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><defs></defs><g><g><path class="fil0" d="M493 1797l1448 0c-6,67 -9,134 -9,203 0,23 0,45 1,68l-1440 0c-122,0 -222,100 -222,222l0 4389c0,121 100,221 222,221l7546 0c122,0 222,-100 222,-221l0 -4389c0,-122 -100,-222 -222,-222l-1440 0c1,-23 1,-45 1,-68 0,-69 -3,-136 -9,-203l1448 0c271,0 493,222 493,493l0 4389c0,271 -222,492 -493,492l-7546 0c-271,0 -493,-221 -493,-492l0 -4389c0,-271 222,-493 493,-493z"/><polygon class="fil0" points="808,4554 7724,4554 7724,4907 808,4907 "/><polygon class="fil0" points="808,5837 4787,5837 4787,6191 808,6191 "/><path class="fil0" d="M608 2394l1357 0c74,433 266,825 543,1141l-1900 0 0 -1141zm5959 0l1357 0 0 1141 -1900 0c277,-316 469,-708 543,-1141z"/><g><path class="fil0" d="M6057 5388c345,0 625,280 625,625 0,345 -280,625 -625,625 -345,0 -625,-280 -625,-625 0,-345 280,-625 625,-625z"/><path class="fil0" d="M7099 5388c345,0 625,280 625,625 0,345 -280,625 -625,625 -92,0 -178,-20 -257,-55 160,-138 261,-342 261,-570 0,-228 -101,-432 -261,-570 79,-35 165,-55 257,-55z"/></g><path class="fil0" d="M4266 0c1104,0 2000,895 2000,2000 0,1104 -896,1999 -2000,1999 -1104,0 -2000,-895 -2000,-1999 0,-1105 896,-2000 2000,-2000zm0 324c925,0 1676,750 1676,1676 0,925 -751,1675 -1676,1675 -925,0 -1676,-750 -1676,-1675 0,-926 751,-1676 1676,-1676z"/><path class="fil0" d="M3644 1386c0,-169 37,-306 112,-409 75,-104 187,-171 336,-202l0 -185 348 0 0 185c152,29 266,95 342,198 76,104 114,241 114,413l0 78 -402 0 0 -103c0,-91 -19,-155 -56,-191 -37,-37 -90,-56 -157,-56 -67,0 -119,19 -156,56 -37,36 -56,100 -56,191 0,85 21,159 62,221 41,62 93,120 154,173 62,54 129,106 199,157 71,51 137,109 199,173 62,65 114,139 155,223 41,85 62,187 62,306 0,171 -39,309 -116,414 -78,104 -192,171 -344,200l0 182 -348 0 0 -182c-154,-29 -270,-96 -346,-200 -76,-105 -113,-243 -113,-414l0 -172 401 0 0 197c0,90 20,153 60,189 40,36 93,53 160,53 67,0 121,-17 161,-53 40,-36 60,-99 60,-189 0,-86 -21,-160 -62,-222 -41,-62 -93,-119 -155,-173 -62,-53 -128,-106 -199,-157 -70,-51 -137,-109 -199,-173 -61,-64 -113,-139 -154,-223 -41,-85 -62,-186 -62,-305z"/></g></g></svg>`;

  var svg3 = `    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 67 83.75" enable-background="new 0 0 67 67" xml:space="preserve"><g><path d="M33.5,32c-7.7,0-14,6.3-14,14s6.3,14,14,14c7.7,0,14-6.3,14-14S41.2,32,33.5,32z M39.5,43.1l-7.2,7.2   c-0.2,0.2-0.4,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3l-3.5-3.5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l2.8,2.8l6.5-6.4   c0.4-0.4,1-0.4,1.4,0C39.9,42.1,39.9,42.7,39.5,43.1z"/><path d="M62,7.1H5c-1.9,0-3.5,1.6-3.5,3.5v13.6c0,1.9,1.6,3.5,3.5,3.5h57c1.9,0,3.5-1.6,3.5-3.5V10.6   C65.5,8.7,63.9,7.1,62,7.1z M20.4,18.4h-2l1.3,1.8c0.3,0.5,0.2,1.1-0.2,1.4c-0.5,0.3-1.1,0.2-1.4-0.2l-1.6-2.3l-1.6,2.3   c-0.3,0.4-0.9,0.5-1.4,0.2c-0.4-0.3-0.6-1-0.2-1.4l1.3-1.8h-2c-0.6,0-1-0.5-1-1s0.4-1,1-1h2l-1.3-1.8c-0.3-0.4-0.2-1.1,0.2-1.4   c0.4-0.3,1.1-0.2,1.4,0.2l1.6,2.3l1.6-2.3c0.3-0.4,0.9-0.5,1.4-0.2c0.4,0.3,0.5,0.9,0.2,1.4l-1.3,1.8h2c0.5,0,1,0.5,1,1   S20.9,18.4,20.4,18.4z M37.5,18.4h-2l1.3,1.8c0.3,0.5,0.2,1.1-0.2,1.4c-0.4,0.3-1.1,0.2-1.4-0.2l-1.7-2.3l-1.6,2.3   c-0.3,0.4-0.9,0.5-1.4,0.2c-0.5-0.3-0.5-1-0.2-1.4l1.3-1.8h-2c-0.5,0-1-0.5-1-1s0.5-1,1-1h2l-1.3-1.8c-0.3-0.4-0.2-1.1,0.2-1.4   c0.5-0.3,1.1-0.2,1.4,0.2l1.6,2.3l1.7-2.3c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,0.9,0.2,1.4l-1.3,1.8h2c0.6,0,1,0.5,1,1   S38,18.4,37.5,18.4z M54.6,18.4h-2l1.3,1.8c0.3,0.5,0.2,1.1-0.2,1.4c-0.5,0.3-1.1,0.2-1.4-0.2l-1.7-2.3L49,21.4   c-0.3,0.4-0.9,0.5-1.4,0.2c-0.5-0.3-0.5-1-0.2-1.4l1.3-1.8h-2c-0.5,0-1-0.5-1-1s0.5-1,1-1h2l-1.3-1.8c-0.3-0.4-0.2-1.1,0.2-1.4   c0.4-0.3,1.1-0.2,1.4,0.2l1.6,2.3l1.7-2.3c0.3-0.4,0.9-0.5,1.4-0.2c0.4,0.3,0.5,0.9,0.2,1.4l-1.3,1.8h2c0.6,0,1,0.5,1,1   S55.1,18.4,54.6,18.4z"/></g></svg>`;

  return (
    <div >
      <header class="hero-header">
        <div class="intro-sec"></div>
        <div class="home-hiw">
          <ul class="block-list">
            <h2>About CovidWarrior</h2>
            <li>
              <div class="icon-hldr">
                <div dangerouslySetInnerHTML={{ __html: svg1 }} />
              </div>
              Donate to PM Relief fund
            </li>
            <li>
              <div class="icon-hldr">
                <div dangerouslySetInnerHTML={{ __html: svg2 }} />
              </div>
              Learn about COVID
            </li>
            <li>
              <div class="icon-hldr">
                <div dangerouslySetInnerHTML={{ __html: svg3 }} />
              </div>
              Track Covid Around you
            </li>
          </ul>
        </div>
      </header>
      <BeCovidWarriror />
      <Help />
      <AboutCovid />
    </div>
  );
};

export default Home;