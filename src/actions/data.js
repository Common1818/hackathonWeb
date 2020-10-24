import axios from "axios";

export const getCovidData = () => async (dispatch) => {
  const res = await axios.get("https://api.covid19india.org/data.json");
  const { statewise } = res.data;
  var dataArray = [];
  statewise &&
    statewise.map((data) => {
      const { state, statecode, active, confirmed, deaths, recovered } = data;
      dataArray.push({
        id: statecode,
        state,
        value: active,
        confirmed,
        deaths,
        recovered,
      });
    });
  dispatch({
    type: "FETCH_COVID_DATA",
    payload: dataArray,
  });
};

export const getNewsData = () => async (dispatch) => {
  const res = await axios.get(
    "http://newsapi.org/v2/everything?q=covid&sortBy=popularity&apiKey=586e395f411a4c5fad7c974cb0776542"
  );
  const { articles } = res.data;

  dispatch({
    type: "FETCH_NEWS_DATA",
    payload: articles.slice(0, 15),
  });
};

export const addPatient = (patient) => async (dispatch) => {
  dispatch({
    type: "ADD_PATIENT",
    payload: patient,
  });
};
