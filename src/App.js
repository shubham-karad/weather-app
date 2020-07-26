import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./fetchAction";
import "./weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    city: "",
    country: "",
  };

  handleChange = (event) => {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value,
    });
  };

  calCelsius = (temp) => {
    let cell = Math.floor(temp - 273.15);
    return cell;
  };

  render() {
    const data = (
      <div>
        <div> {this.props.weatherdata.city}</div>
        <br />
        <div>
          {this.props.weatherdata.temp ? (
            <div>{this.calCelsius(this.props.weatherdata.temp)}&deg;</div>
          ) : null}
        </div>
        <br />
        <div>
          <i className={`wi ${this.props.icon.icon} display-1`} />
        </div>
        <br />
        <div> {this.props.weatherdata.description}</div>
        {/* <br />
        <div> {this.props.weatherdata.minTemp}</div>
        <br />
        <div> {this.props.weatherdata.maxTemp}</div>
        <br /> */}
      </div>
    );

    return (
      <div className="container">
        <form>
          <input
            type="text"
            name="city"
            placeholder="City"
            autoComplete="off"
            value={this.state.city}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            autoComplete="off"
            value={this.state.country}
            onChange={this.handleChange}
            required
          />
          <input
            type="button"
            value="Get Weather"
            onClick={() =>
              this.props.onSubmitAction(this.state.city, this.state.country)
            }
          />
        </form>
        <br />
        <br />
        <br />
        <br />
        <div className="data">
          {this.props.weatherdata.loading ? (
            <div>Loading...</div>
          ) : (
            <div>{data} </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitAction: (city, country) =>
      dispatch(actions.fetchWeatherdata(city, country)),
  };
};

const mapStateToProps = (state) => {
  return {
    weatherdata: state.data,
    icon: state.icon,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
