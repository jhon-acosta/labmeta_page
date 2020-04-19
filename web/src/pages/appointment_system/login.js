import React, { Component } from "react";
import { withRouter } from "react-router-dom";


//import Form from './form'


class Login extends Component {
  render() {
    const logo = require('../../assets/logo.jpeg')
    const longin = require('../../assets/website/login.png')
    return (
      <div>
        <div className="float-left w-1/2 h-screen bg-yellow-300 p-20">
        <img src={longin} alt="login" className="rounded" />
          <h1 className = "pt-32">Registrado/a puedes:</h1>
          <ul className="p-4">
            <li> <i className="fas fa-check-circle px-1"></i>Agendar una cita en horarios disponibles para tí.</li>
            <li> <i className="fas fa-check-circle px-1"></i>Consultar tu historial Clínico. </li>
            <li><i className="fas fa-check-circle px-1"></i>Verificar tus resultados desde tu hogar.</li>
            <li><i className="fas fa-check-circle px-1"></i>Solicitar Exámenes a Domicilio.</li>
            <li></li>
          </ul>
        </div>

        <div className="float-right w-1/2 h-screen bg-green-500">
          <div className="p-16">
            <form className="items-center content-center ">
              <h1 className="text-4xl font-medium text-center py-2" >INICIAR SESIÓN</h1>
              <img src={logo} alt="logo" className="w-28 h-24 rounded-full" />
              <label>
                Correo Electronico:<br />
                <i className="fas fa-user px-1"></i>
                <input type="text" name="name" placeHolder="Ingresa tu Correo Electronico" className="border-2 w-11/12 h-10 rounded-lg" />
              </label>
              <br /><br />
              <label>
                Contraseña:<br />
                <i className="fas fa-key px-1"></i>
                <input type="text" name="name" placeHolder=" Ingresa tu Contraseña" className="border-2 w-11/12 h-10 rounded-lg" />
              </label> <br /><br />
              <input type="submit" value="Ingresar" className="bg-yellow-500 w-24 h-10 rounded-lg cursor-pointer hover:text-red-100" />
              <br /><br />
              <button
                className="text-left hover:text-yellow-600"
                onClick={() => this.props.history.push("/")}
              >
                <i className="fas fa-user-plus px-1"></i>
              Registrate
            </button>
              <br /><br />
              <button
                className="text-left hover:text-yellow-600"
                onClick={() => this.props.history.push("/form")}
              >
                <i className="fas fa-user-lock px-1"></i>
              ¿Olvidaste tu contraseña?
            </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
