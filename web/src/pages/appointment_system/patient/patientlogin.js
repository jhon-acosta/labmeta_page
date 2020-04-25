import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5000/labmeta/loginpatients";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pers_cor_ele: "",
      pers_cla: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginAccess = (e) => {
    e.preventDefault();
    if (this.state.pers_cor_ele === "" || this.state.pers_cla === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios
        .post(API, this.state)
        .then((response) => {
          if (response.data.mensaje === "found") {
            this.props.history.push("/patienthome");
          }
        })
        .catch((error) => {
          alert("Datos Incorrectos");
        });
    }
  };

  render() {
    const { pers_cor_ele, pers_cla } = this.state;
    const logo = require("../../../assets/logo.png");
    const login = require("../../../assets/appointment_system/patient/login.png");
    return (
      <div className="flex">
        <div className="hidden lg:block md:block lg:w-1/2 md:w-1/2 h-screen bg-yellow-300 lg:p-20 md:p-12">
          <h1 className="text-3xl font-bold text-center">
            BIENVENIDO A LABMETA S.A.
          </h1>
          <img src={login} alt="login" className="rounded" />
        </div>

        <div className="lg:w-1/2 md:w-1/2 w-full h-screen bg-green-500 lg:p-20 md:p-12 p-4">
          <div className="flex justify-center py-2">
            <img src={logo} alt="logo" className="w-28 h-24 rounded-full" />
          </div>
          <form>
            <h1 className="text-4xl font-bold text-center">INICIAR SESIÓN</h1>
            <div className="py-2">
              <p>Correo Electronico:</p>
              <div className="flex items-center">
                <i className="fas fa-user px-1"></i>
                <input
                  className="border-2 w-full h-10 rounded-lg px-2"
                  type="text"
                  placeHolder="Ingresa tu Correo Electrónico"
                  name="pers_cor_ele"
                  value={pers_cor_ele}
                  onChange={this.changeHandler}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="py-2">
              <p>Contraseña:</p>
              <div className="flex items-center">
                <i className="fas fa-key px-1"></i>
                <input
                  className="border-2 w-full h-10 rounded-lg px-2"
                  type="password"
                  placeHolder=" Ingresa tu Contraseña"
                  name="pers_cla"
                  value={pers_cla}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <div className="flex justify-center py-2">
              <button
                className="bg-yellow-500 rounded-lg hover:bg-yellow-400 p-3 mr-2"
                onClick={this.loginAccess}
              >
                Ingresar
              </button>
              <button
                className="bg-blue-700 rounded-lg hover:text-white p-3 ml-2"
                onClick={() => this.props.history.push("/patientregister")}
              >
                <i className="fas fa-user-plus px-1"></i>
                Registrarme
              </button>
            </div>
            {/* <div className="flex justify-end">
              <button className="hover:text-yellow-300 py-2">
                <i className="fas fa-user-lock px-1"></i>
                ¿Olvidaste tu contraseña?
              </button>
            </div> */}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
