import axios from "axios";

const API_KEY = "149243a2f6162df1d1674edf3035cedc";

export const fetchWeatherdata = (city, country) => async (dispatch) => {
  dispatch(requestSent());

  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "," +
        country +
        "&appid=" +
        API_KEY
    )
    .then((response) => {
      console.log(response);
      const weatherData = {
        city: response.data.name,
        temp: response.data.main.temp,
        description: response.data.weather[0].description,

        minTemp: response.data.main.temp_min,
        maxTemp: response.data.main.temp_max,
      };
      dispatch(saveData(weatherData));
      dispatch(saveIcon(response.data.weather[0].id));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const requestSent = () => {
  return {
    type: "FETCHING_DATA",
  };
};

export const saveData = (weatherData) => {
  return {
    type: "SAVE_DATA",
    payload: weatherData,
  };
};

export const saveIcon = (rangeId) => {
  return {
    type: "SAVE_ICON",
    rangeId: rangeId,
  };
};
