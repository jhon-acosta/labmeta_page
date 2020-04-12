import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    const logo = require("../assets/logo.jpeg")
    return (
      <div className="font-serif">
        <div className="w-full h-6 bg-green-400"></div>

        <div className="flex flex-row justify-between items-center h-auto lg:px-32 md:px-20 px-2 py-2 bg-yellow-400">
          <div className="flex">
            <img src={ logo } alt="logo" className="w-28 h-24 rounded-full" />
          </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col items-center py-2">
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

        <div className="h-auto bg-yellow-400 lg:px-32 md:px-20 px-2">
          <div className="flex flex-row flex-wrap justify-center py-1 lg:justify-start md:justify-start">
            <button className="lg:text-xl md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white"
              onClick={ () => this.props.history.push("/")}>
              <i className="fas fa-home"></i>
              Inicio
            </button>

            <div className="group relative">
              <button className="lg:text-xl md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white">
                <i className="fas fa-syringe px-1"></i>
                Servicios
              </button>
              <div className="hidden group-hover:block absolute w-full bg-yellow-400 z-10">
                  <button className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 hover:text-white text-sm w-full"
                    onClick={ () => this.props.history.push("/")}>
                    <i className="fas fa-chevron-right px-1"></i>
                    Cardiología
                  </button>
                  <button className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 hover:text-white text-sm w-full"
                    onClick={ () => this.props.history.push("/rayx")}>
                    <i className="fas fa-chevron-right px-1"></i>
                    Rayos X
                  </button>
                  <button className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 hover:text-white text-sm w-full"
                    onClick={ () => this.props.history.push("/")}>
                    <i className="fas fa-chevron-right px-1"></i>
                    Ginecología
                  </button>
                  <button className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 hover:text-white text-sm w-full"
                    onClick={ () => this.props.history.push("/")}>
                    <i className="fas fa-chevron-right px-1"></i>
                    Ecografía
                  </button>
                  <button className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 hover:text-white text-sm w-full"
                    onClick={ () => this.props.history.push("/")}>
                    <i className="fas fa-chevron-right px-1"></i>
                    Hermatología
                  </button>
              </div>
            </div>
            <button className="lg:text-xl md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white"
              onClick={ () => this.props.history.push("/")}>
              <i className="fas fa-percentage px-1"></i>
              Promociones
            </button>
            <button className="lg:text-xl md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white"
              onClick={ () => this.props.history.push("/whoweare")}>
              <i className="fas fa-user-md px-1"></i>
              ¿Quiénes somos?
            </button>
            <button className="lg:text-xl md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white"
              onClick={ () => this.props.history.push("/contactus")}>
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
