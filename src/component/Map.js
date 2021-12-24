import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ lat: 33.448376, lng: -112.074036 }],
      // {latitude: 47.359423, longitude: -122.021071},
      // {latitude: 47.2052192687988, longitude: -121.988426208496},
      // {latitude: 47.6307081, longitude: -122.1434325},
      // {latitude: 47.3084488, longitude: -122.2140121},
      // {latitude: 47.5524695, longitude: -122.0425407}]
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    const mapStyles = {
      width: "100%",
      height: "500px",
    };
    return (
      <section className="contact_map">
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{ lat: 33.448376, lng: -112.074036 }}
          style={mapStyles}
        >
          {this.displayMarkers()}
        </Map>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBCB4y0SztfLo236n4JECwTvIQd-VecF2Y",
})(MapContainer);
