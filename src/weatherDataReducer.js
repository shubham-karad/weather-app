const initialState = {
  loading: false,
  error: "",
  city: "",
  temp: "",
  description: "",
  minTemp: "",
  maxTemp: "",
};

const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        loading: true,
      };

    case "SAVE_DATA":
      return {
        ...state,
        city: action.payload.city,
        temp: action.payload.temp,
        description: action.payload.description,

        minTemp: action.payload.minTemp,
        maxTemp: action.payload.maxTemp,

        loading: false,
      };

    default:
      return state;
  }
};

export default weatherDataReducer;
