import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    const logo2 = require("../assets/logo2.jpeg");
    return (
      <div className="bg-gray-800 text-white h-auto">
        <div className="flex lg:flex-row md:flex-row flex-col justify-between px-8 py-4 items-center">
          <div className="flex flex-col px-4 py-4">
            <img src={logo2} alt="logo2" className="w-64 h-16 rounded-md" />
          </div>

          <div className="flex flex-col px-4 py-4 w-64">
            <h1 className="text-xl">Nuestros Servicios.</h1>
            <button className="text-left hover:text-yellow-600">
              Cardiología
            </button>
            <button
              className="text-left hover:text-yellow-600"
              onClick={() => this.props.history.push("/rayx")}
            >
              RayosX
            </button>
            <button className="text-left hover:text-yellow-600">
              Ginecología
            </button>
            <button className="text-left hover:text-yellow-600">
              Ecografía
            </button>
            <button className="text-left hover:text-yellow-600">
              Hermatología
            </button>
          </div>

          <div className="flex flex-col px-4 py-4 w-64">
            <h1 className="text-xl">Horarios de Atención.</h1>
            <p>Lun–Vie: 07:00am–16:00pm</p>
            <p>Sab: 07:00am–16:00pm</p>
          </div>

          <div className="flex flex-col px-4 py-4 w-64">
            <div className="py-2">
              <h1 className="text-xl">Ubicación.</h1>
              <p>
                Av. Hungria N31-91 y Vancouver, diagonal a la gasolinera
                Petrocomercial
              </p>
              <p>Quito-Ecuador</p>
            </div>
          </div>

          <div className="flex flex-col px-4 py-4 w-64">
            <h1 className="text-xl">Comunícate con nosotros.</h1>
            <p>Telf :(02) 2503238 - 2503037</p>
            <p>Cel : 0996031288 </p>
            <p>e-mail : rlabmeta@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
