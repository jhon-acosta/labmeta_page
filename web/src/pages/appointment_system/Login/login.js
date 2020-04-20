import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5000/labmeta/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pers_cor_ele: "admin@gmail.com",
      pers_cla: "1234",
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
            this.props.history.push("/");
          }
        })
        .catch((error) => {
          alert("Datos Incorrectos");
        });
    }
  };

  render() {
    const { pers_cor_ele, pers_cla } = this.state;
    const logo = require("../../../assets/logo.jpeg");
    const login = require("../../../assets/website/login.png");
    return (
      <div className="flex">
        <div className="hidden lg:block md:block lg:w-1/2 md:w-1/2 h-screen bg-yellow-300 lg:p-20 md:p-12">
          <img src={login} alt="login" className="rounded" />
          <h1 className="mt-32">Registrado/a puedes:</h1>
          <div>
            <p>
              <i className="fas fa-check-circle px-1"></i>
              Agendar una cita en horarios disponibles para tí.
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
        </div>

        <div className="lg:w-1/2 md:w-1/2 w-full h-screen bg-green-500 lg:p-20 md:p-12 p-4">
          <div className="flex justify-center py-2">
            <img src={logo} alt="logo" className="w-28 h-24 rounded-full" />
          </div>
          <form onSubmit={this.loginAccess}>
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
                className="text-left hover:text-yellow-600"
                onClick={() => this.props.history.push("/form")}
              >
                Ingresar
              </button>
              <button className="hover:text-yellow-300 px-6">
                <i className="fas fa-user-plus px-1"></i>
                Regístrate
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
