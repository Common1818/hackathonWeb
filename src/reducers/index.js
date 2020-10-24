import { combineReducers } from "redux";
import covidData from "./covidData";
import helpMe from "./helpMe";

export default combineReducers({
  covidData,
  helpMe,
});
