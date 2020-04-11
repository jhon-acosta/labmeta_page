import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    const logo = require("../assets/logo.jpeg")
    return (
      <div className="font-serif">
        <div className="w-full h-6 bg-green-400"></div>

        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center h-auto lg:px-32 md:px-20 py-2 bg-yellow-400">
          <div className="flex">
            <img src={ logo } alt="logo" className="w-28 h-24" />
          </div>

          <div className="flex flex-row items-center py-2">
            <div className="px-4 flex-col flex">
              <h1 className="font-bold lg:text-2xl md:text-2xl text-sm">Llama hoy:</h1>
              <p className="lg:text-md text-sm">(+593)987654321</p>
              <p className="lg:text-md text-sm">(02) 321-456</p>
            </div>

            <div className="px-4 flex-col flex">
              <h1 className="font-bold lg:text-2xl md:text-2xl text-sm">Horarios de atención:</h1>
              <p className="lg:text-md text-sm">Lun–Vie: 07:00am–16:00pm</p>
              <p className="lg:text-md text-sm">Sab: 07:00am–16:00pm</p>
            </div>
          </div>
        </div>

        <hr className="border-green-400" />

        <div className="h-auto bg-yellow-400 lg:px-32 px-8 flex lg:justify-start justify-center">
          <div className="flex lg:flex-row md:flex-row flex-col py-1">
            <button className="text-xl px-4 hover:bg-green-500 hover:text-white"
              onClick={ () => this.props.history.push("/")}>
              <i className="fas fa-home"></i>
              Inicio
            </button>

            <div className="group relative h-full">
              <button className="text-xl px-4 hover:bg-green-500 hover:text-white">
                <i className="fas fa-user px-1"></i>
                Servicios
                <i className="fas fa-angle-down px-1"></i>
              </button>
              <div className="hidden group-hover:block absolute w-full bg-yellow-400 z-10">
                  <button className="block text-left py-3 px-3 hover:bg-green-500 hover:text-white text-md w-full"
                    onClick={ () => this.props.history.push("/")}>
                    <i className="fas fa-chevron-right px-1"></i>
                    Cardiología
                  </button>
                  <button className="block text-left py-3 px-3 hover:bg-green-500 hover:text-white text-md w-full"
                    onClick={ () => this.props.history.push("/rayos_x")}>
                    <i className="fas fa-chevron-right px-1"></i>
                    Rayos X
                  </button>
                  <button className="block text-left py-3 px-3 hover:bg-green-500 hover:text-white text-md w-full"
                    onClick={ () => this.props.history.push("/")}>
                    <i className="fas fa-chevron-right px-1"></i>
                    Ginecología
                  </button>
                  <button className="block text-left py-3 px-3 hover:bg-green-500 hover:text-white text-md w-full"
                    onClick={ () => this.props.history.push("/")}>
                    <i className="fas fa-chevron-right px-1"></i>
                    Ecografía
                  </button>
                  <button className="block text-left py-3 px-3 hover:bg-green-500 hover:text-white text-md w-full"
                    onClick={ () => this.props.history.push("/")}>
                    <i className="fas fa-chevron-right px-1"></i>
                    Hermatología
                  </button>
              </div>
            </div>
            <button className="text-xl px-4 hover:bg-green-500 hover:text-white"
              onClick={ () => this.props.history.push("/")}>
              <i className="fas fa-percentage px-1"></i>
              Promociones
            </button>
            <button className="text-xl px-4 hover:bg-green-500 hover:text-white"
              onClick={ () => this.props.history.push("/")}>
              <i className="fas fa-user-md px-1"></i>
              ¿Quiénes somos?
            </button>
            <button className="text-xl px-4 hover:bg-green-500 hover:text-white"
              onClick={ () => this.props.history.push("/")}>
              <i className="fas fa-phone-alt px-1"></i>
              Contactanos
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
