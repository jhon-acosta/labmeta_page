import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// import "./writing.css";

class Register extends Component {
  render() {
    const logo = require("../../assets/logo.jpeg");
    const register = require("../../assets/appointment_system/register.jpg");
    return (
      <div className="flex">
        <div className="lg:w-1/2 md:w-1/2 w-full h-screen bg-green-500 lg:p-8 md:p-12 p-4">
          <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className="w-28 h-24 rounded-full px-4"
            />
            <h1 className="text-4xl font-bold text-center">Regístrate</h1>
          </div>
          <div>
            <div className="py-1">
              <div className="flex items-center">
                <i className="fas fa-user px-1"></i>
                <p className="px-2">* Apellidos y Nombres:</p>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeHolder="Apellidos y Nombres"
                  className="border-2 h-10 w-full rounded-lg px-4"
                />
              </div>
            </div>
            <div className="py-1">
              <div className="flex items-center">
                <i className="fas fa-user px-1"></i>
                <p className="px-2">* Identificación:</p>
              </div>
              <div className="flex">
                <div className="px-1">
                  <select className="border-2 h-10 w-full rounded-lg">
                    <option value="">Seleccione...</option>
                    <option value="1">Cédula</option>
                    <option value="2">R.U.C.</option>
                    <option value="3">Pasaporte</option>
                  </select>
                </div>
                <div className="px-1">
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeHolder="1234567890"
                    className="border-2 h-10 w-full rounded-lg px-4"
                  />
                </div>
              </div>
            </div>
            <div className="py-1">
              <div className="flex">
                <div className="flex items-center">
                  <i className="fas fa-user px-1"></i>
                  <p className="px-2">* Género:</p>
                </div>
                <select className="border-2 h-10 rounded-lg">
                  <option value="">Seleccione...</option>
                  <option value="1">Masculino</option>
                  <option value="2">Femenino</option>
                </select>
              </div>
            </div>
            {/* <div className="flex items-center py-1">
              <i className="fas fa-user px-1"></i>
              <p className="px-2">Teléfono/Celular:</p>
              <input
                type="text"
                name="name"
                placeHolder="0987654321"
                className="border-2 h-10 rounded-lg px-4 flex-1"
              />
            </div> */}
            {/* <div className="flex items-center py-1">
              <i className="fas fa-user px-1"></i>
              <p className="px-2">Dirección domicilio:</p>
              <input
                type="text"
                name="name"
                placeHolder="Hungria y Vancouver"
                className="border-2 h-10 rounded-lg px-4 flex-1"
              />
            </div> */}
            <div className="py-1">
              <div className="flex items-center py-1">
                <i className="fas fa-user px-1"></i>
                <p className="px-2">* Correo Electrónico:</p>
              </div>
              <div>
                <input
                  type="email"
                  name="name"
                  autoComplete="off"
                  placeHolder="ejemplo@gmail.com"
                  className="border-2 h-10 w-full rounded-lg px-4"
                />
              </div>
            </div>

            <div className="flex items-center py-1">
              <i className="fas fa-user px-1"></i>
              <p className="px-2">* Contraseña:</p>
            </div>
            <div className="flex">
              <div className="px-1 w-full">
                <input
                  type="password"
                  name="name"
                  placeHolder="Contraseña"
                  className="border-2 h-10 w-full rounded-lg px-4"
                />
              </div>
              <div className="px-1 w-full">
                <input
                  type="password"
                  name="name"
                  placeHolder="Confirmar contraseña"
                  className="border-2 h-10 w-full rounded-lg px-4"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center py-8">
              <button
                className="bg-yellow-500 rounded-lg hover:bg-yellow-400 p-3 mr-2"
                onClick={() => this.props.history.push("/login")}
              >
                Registrarme
              </button>
              <button
                className="bg-blue-700 rounded-lg hover:text-white p-3 ml-2"
                onClick={() => this.props.history.push("/login")}
              >
                <i className="fas fa-user-plus px-1"></i>
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block md:block lg:w-1/2 md:w-1/2 h-screen bg-yellow-300 lg:p-20 md:p-12">
          <h1>Creando una cuenta con nosotros accedes a:</h1>
          <div>
            <p>
              <i className="fas fa-check-circle px-1"></i>
              Agenda una cita en nuestros horarios disponibles para tí desde la
              comodidad de tu hogar.
            </p>
            <p>
              <i className="fas fa-check-circle px-1"></i>
              Consultar tu historial Clínico.
            </p>
            <p>
              <i className="fas fa-check-circle px-1"></i>
              Verificar tus resultados desde tu hogar.
            </p>
            <p>
              <i className="fas fa-check-circle px-1"></i>
              Solicitar Exámenes a Domicilio.
            </p>
          </div>
          <img src={register} alt="register" />
        </div>
      </div>
    );
  }
}
export default withRouter(Register);
