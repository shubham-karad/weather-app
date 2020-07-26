// const weatherIcon = {
//   Thunderstorm: "wi-thunderstorm",
//   Drizzle: "wi-sleet",
//   Rain: "wi-storm-showers",
//   Snow: "wi-snow",
//   Atmosphere: "wi-fog",
//   Clear: "wi-day-sunny",
//   Clouds: "wi-day-fog",
// };

const initialState = {
  icon: "",
};

const setIconsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ICON":
      if (action.rangeId >= 200 && action.rangeId < 232) {
        return {
          ...state,
          icon: "wi-thunderstorm",
        };
      } else if (action.rangeId >= 300 && action.rangeId < 321) {
        return {
          ...state,
          icon: "wi-sleet",
        };
      } else if (action.rangeId >= 500 && action.rangeId < 521) {
        return {
          ...state,
          icon: "wi-storm-showers",
        };
      } else if (action.rangeId >= 600 && action.rangeId < 622) {
        return {
          ...state,
          icon: "wi-snow",
        };
      } else if (action.rangeId >= 701 && action.rangeId < 781) {
        return {
          ...state,
          icon: "wi-fog",
        };
      } else if (action.rangeId === 800) {
        return {
          ...state,
          icon: "wi-day-sunny",
        };
      } else if (action.rangeId >= 801 && action.rangeId < 804) {
        return {
          ...state,
          icon: "wi-day-fog",
        };
      }
      break;

    default:
      return state;
  }
};

export default setIconsReducer;
