import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    const logo = require("../../../../assets/logo2.jpeg");
    return (
      <header className="flex h-12 w-full bg-gray-500 border border-1 border-gray-600 items-center justify-between">
        <div className="ml-2 flex items-center h-full">
          <div className="flex items-center text-center h-full w-48">
            <img src={logo} alt="login" className="rounded" />
          </div>
        </div>
        <div className="items-center h-full text-sm">
          <div className="items-center h-full">
            <div className="group relative h-full">
              <button className="items-center h-full hover:bg-gray-600 px-4">
                <i className="fas fa-user mr-2"></i>
                Bienvenido $UserName
                <i className="fas fa-angle-down ml-2"></i>
              </button>
              <div className="hidden group-hover:block absolute pin-r top-auto w-full bg-gray-500 border border-1 border-gray-600">
                {/* <button className="block text-left py-3 px-3 hover:bg-gray-600 text-xs w-full">
                  <i className="fas fa-user-edit mr-2"></i>
                  Cambiar contraseña
                </button> */}
                <button
                  className="block text-left py-3 px-3 hover:bg-gray-600 text-xs w-full"
                  onClick={() => this.props.history.push("/")}
                >
                  <i className="fas fa-sign-out-alt mr-2"></i>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
