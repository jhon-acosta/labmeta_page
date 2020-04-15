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
        <div className="bg-gray-300 h-64 w-full">
          <h1 className="text-center lg:text-4xl md:text-4xl text-2xl font-bold text-green-700">Contáctanos</h1>
          <div className="float-left pl-64 pt-8">
            <h1 className="text-center lg:text-2xl pb-10 md:text-4xl text-2xl font-seminbold text-green-700">Vía Telefónica</h1>
            <p><i className="fas fa-phone-alt px-1"></i> (02) 2503238 - 2503037</p>
            <p><i className="fas fa-mobile-alt px-1"></i> (+593) 996031288 </p>

          </div>
          <div className="float-right pr-64 pt-8">
            <h1 className="text-center lg:text-2xl pb-10 md:text-4xl text-2xl font-seminbold text-green-700">Vía E-mail</h1>
            <p><i className="fas fa-envelope-square px-1"></i> rlabmeta@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="text-center bg-gray-300 pb-4">
            <h1 className="lg:text-2xl pb-6 md:text-4xl text-2xl font-seminbold text-green-700">Ubicados en:</h1>
            <p><i className="fas fa-map-marker-alt px-1"></i>
                Av. Hungria N31-91 y Vancouver, diagonal a la gasolinera
                Petrocomercial
              </p>
          </div>
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
