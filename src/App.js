import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Google map with react</h1>
        </header>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807,
          }}
          zoom={15}
          onClick={this.onMapClicked}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "YOUR_GOOGLE_API_KEY_GOES_HERE",
})(App);
