import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5000/labmeta/";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pers_nom: "",
      pers_tip_ide_id: "",
      pers_ide: "",
      pers_gen_id: "",
      pers_cor_ele: "",
      pers_cla: "",
      persona_genero: [],
      persona_tipo_identificacione: [],
    };
  }

  componentDidMount() {
    axios
      .get(API + "persona_genero")
      .then((response) => {
        this.setState({ persona_genero: response.data.datos });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(API + "persona_tipo_identificacione")
      .then((response) => {
        this.setState({ persona_tipo_identificacione: response.data.datos });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerUser = (e) => {
    e.preventDefault();
    this.post = {
      datos: {
        pers_nom: this.state.pers_nom,
        pers_tip_ide_id: this.state.pers_tip_ide_id,
        pers_ide: this.state.pers_ide,
        pers_gen_id: this.state.pers_gen_id,
        pers_cor_ele: this.state.pers_cor_ele,
        pers_cla: this.state.pers_cla,
        pers_tip_id: 2,
      },
    };
    if (
      this.post.datos.pers_nom === "" ||
      this.post.datos.pers_tip_ide_id === "" ||
      this.post.datos.pers_ide === "" ||
      this.post.datos.pers_gen_id === "" ||
      this.post.datos.pers_cor_ele === "" ||
      this.post.datos.pers_cla === ""
    ) {
      alert("Complete todos los datos para continuar...");
    } else {
      axios
        .post(API + "persona", this.post)
        .then((response) => {
          if (response.data.ok === true) {
            // localStorage.setItem("pers_nom", this.state.pers_nom);
            this.props.history.push("/login");
          }
        })
        .catch((error) => {
          alert("Datos Incorrectos");
        });
    }
  };

  render() {
    const {
      pers_nom,
      pers_tip_ide_id,
      pers_ide,
      pers_gen_id,
      pers_cor_ele,
      pers_cla,
      persona_genero,
      persona_tipo_identificacione,
    } = this.state;
    const logo = require("../../assets/logo.png");
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
                <p className="px-2">* Apellidos y nombres:</p>
              </div>
              <div>
                <input
                  className="border-2 h-10 w-full rounded-lg px-4"
                  placeHolder="Apellidos y nombres"
                  type="text"
                  name="pers_nom"
                  value={pers_nom}
                  onChange={this.changeHandler}
                  autoComplete="off"
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
                  <select
                    className="border-2 h-10 w-full rounded-lg"
                    name="pers_tip_ide_id"
                    value={pers_tip_ide_id}
                    onChange={this.changeHandler}
                  >
                    <option value="">Seleccione...</option>
                    {persona_tipo_identificacione.map((element) => (
                      <option key={element.id} value={element.id}>
                        {element.pers_tip_ide_des}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="px-1">
                  <input
                    className="border-2 h-10 w-full rounded-lg px-4"
                    placeHolder="1234567890"
                    type="text"
                    name="pers_ide"
                    value={pers_ide}
                    onChange={this.changeHandler}
                    autoComplete="off"
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
                <select
                  className="border-2 h-10 rounded-lg"
                  name="pers_gen_id"
                  value={pers_gen_id}
                  onChange={this.changeHandler}
                >
                  <option value="">Seleccione...</option>
                  {persona_genero.map((element) => (
                    <option key={element.id} value={element.id}>
                      {element.pers_gen_des}
                    </option>
                  ))}
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
                  className="border-2 h-10 w-full rounded-lg px-4"
                  placeHolder="ejemplo@gmail.com"
                  type="email"
                  name="pers_cor_ele"
                  value={pers_cor_ele}
                  onChange={this.changeHandler}
                  autoComplete="off"
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
                  className="border-2 h-10 w-full rounded-lg px-4"
                  placeHolder="Contraseña"
                  type="password"
                  name="pers_cla"
                  value={pers_cla}
                  onChange={this.changeHandler}
                />
              </div>
              {/* <div className="px-1 w-full">
                <input
                  type="password"
                  name="name"
                  placeHolder="Confirmar contraseña"
                  className="border-2 h-10 w-full rounded-lg px-4"
                />
              </div> */}
            </div>
          </div>
          <div>
            <div className="flex justify-center py-8">
              <button
                className="bg-yellow-500 rounded-lg hover:bg-yellow-400 p-3 mr-2"
                onClick={this.registerUser}
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
