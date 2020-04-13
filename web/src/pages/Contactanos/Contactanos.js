import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Contactanos extends Component {
  LabmetaLocation = [-0.1911283, -78.4894105];

  render() {
    return (
      <div>
        <Header />
        <div className="bg-gray-500 h-64 w-full"></div>
        <div>
          <Map center={this.LabmetaLocation} zoom={19}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={this.LabmetaLocation}>
              <Popup>Labmeta S.A.</Popup>
            </Marker>
          </Map>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(Contactanos);
