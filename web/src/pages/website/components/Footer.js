import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    const logo2 = require("../../../assets/logo2.jpeg");
    return (
      <div className="bg-gray-800 text-white h-auto font-hairline">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between px-8 py-4 items-center">
          <div className="flex flex-col px-4 py-4">
            <img src={logo2} alt="logo2" className="w-64 h-16 rounded-md" />
          </div>

          <div className="flex flex-col px-4 py-4 w-64">
            <h1 className="text-xl">Nuestros Servicios.</h1>
            <button
              className="text-left hover:text-yellow-600"
              onClick={() => this.props.history.push("/cardiology")}
            >
              <i className="fas fa-arrow-right px-1"></i>
              Cardiología
            </button>
            <button
              className="text-left hover:text-yellow-600"
              onClick={() => this.props.history.push("/rayx")}
            >
              <i className="fas fa-arrow-right px-1"></i>
              RayosX
            </button>
            <button
              className="text-left hover:text-yellow-600"
              onClick={() => this.props.history.push("/gynecology")}
            >
              <i className="fas fa-arrow-right px-1"></i>
              Ginecología
            </button>
            <button
              className="text-left hover:text-yellow-600"
              onClick={() => this.props.history.push("/echography")}
            >
              <i className="fas fa-arrow-right px-1"></i>
              Ecografía
            </button>
            <button
              className="text-left hover:text-yellow-600"
              onClick={() => this.props.history.push("/hermatology")}
            >
              <i className="fas fa-arrow-right px-1"></i>
              Hermatología
            </button>
          </div>

          <div className="flex flex-col px-4 py-4 w-64">
            <h1 className="text-xl">Horarios de Atención.</h1>
            <p>Lun–Vie: 07:00am–16:00pm </p>
            <p>Sab: 07:00am–16:00pm</p>
          </div>

          <div className="flex flex-col px-4 py-4 w-64">
            <div className="py-2">
              <h1 className="text-xl">Ubicación.</h1>
              <p>
                <i className="fas fa-map-marker-alt px-1"></i>
                Av. Hungria N31-91 y Vancouver, diagonal a la gasolinera
                Petrocomercial
              </p>
              <p>Quito-Ecuador</p>
            </div>
          </div>

          <div className="flex flex-col px-4 py-4 w-64">
            <h1 className="text-xl">Comunícate con Nosotros.</h1>
            <p>
              <i className="fas fa-phone-alt px-1"></i> (02) 2503238 - 2503037
            </p>
            <p>
              <i className="fas fa-mobile-alt px-1"></i> 0996031288{" "}
            </p>
            <p>
              <i className="fas fa-envelope-square px-1"></i> rlabmeta@gmail.com
            </p>
            <div className="flex justify-between py-2">
              <button
                className="border bg-yellow-500 text-black p-2 rounded"
                onClick={() => this.props.history.push("/adminlogin")}
              >
                Administrador
              </button>
              {/* <button className="border bg-yellow-500 text-black p-2 rounded">
                Personal
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
