import React, { useState, useEffect } from "react";
import axios from "axios";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";
import "./css/choropleth.css";
import TypingText from "./TypingText";
import tracker from "./images/tracker.PNG";
import { getCovidData } from "../../actions/data";
import { connect } from "react-redux";

const INDIA_TOPO_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 900,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  "#ffedea", //lighest
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618", //darkest
];

const DEFAULT_COLOR = "#EEE";

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#e5cce5",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

const Choropleth = ({ getCovidData, stateArray, statewiseDataLoaded }) => {
  const [tooltipContent, setTooltipContent] = useState("");
  useEffect(() => {
    if (!statewiseDataLoaded) {
      getCovidData();
    }
  }, []);
  const colorScale = scaleQuantile()
    .domain(stateArray.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent({
        name: geo.properties.name,
        ActiveCases: current.value,
        Confirmed: current.confirmed,
        Deaths: current.deaths,
        Recovered: current.recovered,
      });
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <section className="content-wrapper">
      <div style={{ textAlign: "center", background: "black" }}>
        <img className="tracker-img" src={tracker} alt="" />
      </div>
      <div className="choropleth">
        <div className="info">
          <TypingText />
        </div>
        <div>
          <ReactTooltip>
            <span className="state_name">
              {tooltipContent && tooltipContent.name}
            </span>
            <br />
            Total Confirmed Cases :{" "}
            <span className="value">
              {tooltipContent && tooltipContent.Confirmed}
            </span>
            <br />
            Active Cases :{" "}
            <span className="value">
              {tooltipContent && tooltipContent.ActiveCases}
            </span>
            <br />
            Deaths :{" "}
            <span className="value">
              {tooltipContent && tooltipContent.Deaths}
            </span>
            <br />
            Recovered :{" "}
            <span className="value">
              {tooltipContent && tooltipContent.Recovered}
            </span>
          </ReactTooltip>
          <ComposableMap
            projectionConfig={PROJECTION_CONFIG}
            projection="geoMercator"
            className="choropleth-map"
            width={600}
            height={220}
            data-tip=""
          >
            <Geographies geography={INDIA_TOPO_JSON}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const current = stateArray.find((s) => s.id === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  stateArray: state.covidData.stateArray,
  statewiseDataLoaded: state.covidData.statewiseDataLoaded,
});
export default connect(mapStateToProps, { getCovidData })(Choropleth);
