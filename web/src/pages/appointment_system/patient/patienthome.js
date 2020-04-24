import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Menu from "./components/Menu";

class PatientHome extends Component {
  render() {
    const paciente_img = require("../../../assets/appointment_system/patient/paciente.jpg");
    return (
      <div>
        <Menu />
        <div className="bg-green-400 float-right h-screen w-5/6">
          <div className="bg-yellow-400 h-16 w-full flex justify-end border-b-2 border-green-500">
            <button
              className="lg:text-xl md:text-xl text-sm px-8"
            >
              <p>NAME PATIENT</p>
            </button>
            <div className="flex px-2 py-2">
              <img
                src={paciente_img}
                alt="logo"
                className="w-14 h-12 rounded-md"
              />
            </div>
            <div className="flex flex-wrap justify-center py-4 lg:justify-center md:justify-start">
              <div className="group relative">
                <button className="lg:text-xl w-full md:text-xl text-sm px-10 hover:text-white">
                  <i className="fas fa-angle-down px-1"></i>
                </button>
                <div className="hidden group-hover:block absolute w-full bg-yellow-400 z-10 border-green-500 border-2">
                  <button
                    className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 text-sm w-full"
                    onClick={() => this.props.history.push("/patientupdate")}
                  >
                    <p>
                      {" "}
                      <i className="fas fa-user px-1"></i> Mi perfil
              </p>
                  </button>
                  <button
                    className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 text-sm w-full"
                    onClick={() => this.props.history.push("/patientupdatepassword")}
                  >
                    <i className="fas fa-key px-1"></i>
              Cambiar Contraseña
            </button>
                  <button
                    className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 text-sm w-full"
                    onClick={() => this.props.history.push("/gynecology")}
                  >
                    <i className="fas fa-door-closed px-1"></i>
              Cerrar Sesión
            </button>
                </div>
              </div>
            </div>
          </div>
          <p className ="text-xl px-10 pt-10">USUARIO | MENU</p>
          <div className="flex flex-row p-24">
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center border-2">
              <i className="fas fa-user text-6xl border border-white p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
              <p className="py-2 text-xl font-bold">Mi perfil</p>
              <button
                className="text-center hover:text-white w-64"
                onClick={() => this.props.history.push("/patientupdate")}
              >
                Actualizacíon del perfil
            </button>
            </div>
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-justify border-2">
              <i className="fas fa-paperclip text-6xl border border-white p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
              <p className="py-2 text-xl font-bold">Mis citas</p>
              <button
                className="text-center hover:text-white w-64"
                onClick={() => this.props.history.push("/clinichistory")}
              >
                Ver historial de citas
            </button>
            </div>
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-justify border-2">
              <i className="fas fa-file-medical text-6xl border border-white p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
              <p className="py-2 text-xl font-bold">Reserve mi cita</p>
              <button
                className="text-center hover:text-white w-64"
                onClick={() => this.props.history.push("/patientreserve")}
              >
                Reservar una cita
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PatientHome);
