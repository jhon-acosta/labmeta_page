import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import Menu from "./components/Menu";

const API = "http://localhost:5000/labmeta/";

class PatientUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pers_nom: "",
          pers_tip_ide_id: "",
          pers_ide: "",
          pers_gen_id: "",
          pers_cor_ele: "",
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
                this.props.history.push("/patientlogin");
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

        persona_genero,
        persona_tipo_identificacione,
      } = this.state;
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
          <p className ="text-xl px-10 pt-10">USUARIO | EDITAR PERFIL</p>
          <div className="flex">
        <div className="lg:w-full md:w-1/2 w-full h-screen  lg:p-8 md:p-12 p-4">
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
              {/* <div className="px-1 w-full">
                <input
                  type="password"
                  name="name"
                  placeHolder="Confirmar contraseña"
                  className="border-2 h-10 w-full rounded-lg px-4"
                />
              </div> */}
          </div>
          <div>
            <div className="flex justify-center py-8">
              <button
                className="bg-yellow-500 rounded-lg hover:bg-yellow-400 p-3 mr-2"
                onClick={this.registerUser}
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
            
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(PatientUpdate);