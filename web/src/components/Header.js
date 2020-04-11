import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    const logo = require("../assets/logo.jpeg")
    return (
      <div className="font-serif">
        <div className="w-full h-6 bg-green-400"></div>

        <div className="flex lg:flex-row flex-col justify-between items-center h-auto lg:px-32 px-8 py-2 bg-yellow-400">
          <div className="flex">
            <img src={ logo } alt="logo" className="w-28 h-24" />
          </div>

          <div className="flex lg:flex-row md:flex-row flex-col items-center py-2">
            <div className="px-4 hover:bg-yellow-500 hover:text-white">
              <h1 className="font-bold text-md">Llama hoy:</h1>
              <p>(+593) 987654321; (02) 321-456</p>
            </div>

            <div className="px-4 hover:bg-yellow-500 hover:text-white">
              <h1 className="font-bold text-md">Horario de Apertura:</h1>
              <p>Lun–Vie: 07:00am–16:00pm <br /> Sab: 07:00am–16:00pm</p>
            </div>
          </div>
        </div>

        <hr className="border-green-400" />

        <div className="h-auto bg-yellow-400 lg:px-32 px-8 flex lg:justify-start justify-center">
          <div className="flex lg:flex-row md:flex-row flex-col py-1">
            <button className="text-xl px-4 hover:bg-yellow-500 hover:text-white">Inicio</button>

            {/* <li className="pr-20 pt-1">
              <a href="/" className="text-xl font-medium">Servicios <span className=""></span></a>
              
                <div className="sub-menu-items bg-gray-500 hover:block">
                  <p className= "hover:block"> Especialidades</p>
                  <ul className = "p-4 hidden">
                    <li><a href="/" className= "py  -4">Cardiología</a></li>
                    <li><a href="/" className= "py-4">RayosX</a></li>
                    <li><a href="/" className= "py-4">Ginecología</a></li>
                    <li><a href="/" className= "py-4">Ecografía</a></li>
                    <li><a href="/" className= "py-4">Hermatología</a></li>
                  </ul>
                </div>

            </li> */}

            <button className="text-xl px-4 hover:bg-yellow-500 hover:text-white">Promociones</button>
            <button className="text-xl px-4 hover:bg-yellow-500 hover:text-white">¿Quíenes Somos?</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
