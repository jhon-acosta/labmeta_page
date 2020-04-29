import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const API = "http://localhost:5000/labmeta/";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pers_nom: "",
      pers_tip_ide_id: "",
      pers_ide: "",
      pers_tel: "",
      pers_fec_nac: "",
      pers_dir: "",
      pers_gen_id: "",
      pers_cor_ele: "",
      pers_cla: "",
      pers_fot: "",
      persona_genero: [],
      persona_tipo_identificacione: [],
      persona_tipo: [],
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
    axios
      .get(API + "persona_tipo")
      .then((response) => {
        this.setState({ persona_tipo: response.data.datos });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveData = (e) => {
    e.preventDefault();
    this.post = {
      datos: {
        pers_nom: this.state.pers_nom,
        pers_tip_ide_id: this.state.pers_tip_ide_id,
        pers_ide: this.state.pers_ide,
        pers_tel: this.state.pers_tel,
        pers_fec_nac: this.state.pers_fec_nac,
        pers_dir: this.state.pers_dir,
        pers_gen_id: this.state.pers_gen_id,
        pers_cor_ele: this.state.pers_cor_ele,
        pers_cla: this.state.pers_cla,
        pers_fot: this.state.pers_fot,
        pers_tip_id: 2,
      },
    };
    if (
      this.post.datos.pers_nom === "" ||
      this.post.datos.pers_tip_ide_id === "" ||
      this.post.datos.pers_ide === "" ||
      this.post.datos.pers_tel === "" ||
      this.post.datos.pers_fec_nac === "" ||
      this.post.datos.pers_dir === "" ||
      this.post.datos.pers_gen_id === "" ||
      this.post.datos.pers_cla === "" ||
      this.post.datos.pers_cor_ele === ""
    ) {
      Swal.fire("", "Complete todos los datos para continuar...!");
    } else {
      axios
        .post(API + "persona", this.post)
        .then((response) => {
          if (response.data.ok === true) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Agregado exitosamente",
              showConfirmButton: false,
              timer: 1000,
            }).then(() => this.props.history.push("/patientlogin"));
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
      pers_tel,
      pers_fec_nac,
      pers_dir,
      pers_gen_id,
      pers_cor_ele,
      pers_cla,
      //pers_fot,
      persona_genero,
      persona_tipo_identificacione,
    } = this.state;
    const logo = require("../../../assets/logo.png");
    const register = require("../../../assets/appointment_system/patient/register.jpg");
    return (
      <div className="flex">
        <div className="lg:w-1/2 md:w-1/2 w-full h-screen bg-green-500 lg:p-4 md:p-12 p-4">
          <div className="flex lg:flex-col md:flex-row flex-col justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className="w-28 h-24 rounded-full px-4"
            />
            <h1 className="text-4xl font-bold text-center">Regístrate</h1>
          </div>
          <div className="flex flex-col p-2">
            <form className=" w-full flex">
              <div className="">
                <div className="px-1 py-1 flex">
                  <label className="uppercase text-xs font-bold py-2 px-2">
                    Apellidos y nombres *
                </label>
                  <div className="px-1 flex-1">
                    <input
                      className="w-full border border-gray-500 rounded-lg py-2 px-4"
                      type="text"
                      name="pers_nom"
                      value={pers_nom}
                      onChange={this.changeHandler}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="px-1 py-1 flex justify-start">
                  <label className="uppercase text-xs font-bold py-2 px-2">
                    Identificación *
                </label>
                  <div className="px-1">
                    <select
                      className="border border-gray-500 rounded-lg py-2 px-4"
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
                  <div className="px-1 flex-1">
                    <input
                      className="border border-gray-500 rounded-lg py-2 px-4"
                      type="text"
                      name="pers_ide"
                      value={pers_ide}
                      onChange={this.changeHandler}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="px-1 py-1 flex">
                  <label className="uppercase text-xs font-bold py-2 px-2">
                    Teléfono / Celular *
                </label>
                  <div className="px-1 flex-1">
                    <input
                      className="w-full border border-gray-500 rounded-lg py-2 px-4"
                      type="tel"
                      name="pers_tel"
                      value={pers_tel}
                      onChange={this.changeHandler}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="px-1 py-1 flex">
                  <label className="uppercase text-xs font-bold py-2 px-2">
                    Fecha de Nacimiento *
                </label>
                  <div className="px-1 flex-1">
                    <input
                      className="w-full border border-gray-500 rounded-lg py-2 px-4"
                      type="date"
                      name="pers_fec_nac"
                      value={pers_fec_nac}
                      onChange={this.changeHandler}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div>
                  <label className="uppercase text-xs font-bold py-2 px-1">
                    Género *
                  </label>
                  <select
                    className="border border-gray-500 rounded-lg py-2 px-4"
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
                <div className="px-1 py-1 flex">
                  <label className="uppercase text-xs font-bold py-2 px-2">
                    Dirección domicilio *
                </label>
                  <div className="px-1 flex-1">
                    <input
                      className="w-full border border-gray-500 rounded-lg py-2 px-4"
                      type="text"
                      name="pers_dir"
                      value={pers_dir}
                      onChange={this.changeHandler}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="px-1 py-1 flex">
                  <label className="uppercase text-xs font-bold py-2 px-2">
                    Correo electrónico *
                </label>
                  <div className="px-1 flex-1">
                    <input
                      className="w-full border border-gray-500 rounded-lg py-2 px-4"
                      type="email"
                      name="pers_cor_ele"
                      value={pers_cor_ele}
                      onChange={this.changeHandler}
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="px-1 py-1 flex">
                  <label className="uppercase text-xs font-bold py-2 px-2">
                    Contraseña *
                </label>
                  <div className="px-1 flex-1">
                    <input
                      className="w-full border border-gray-500 rounded-lg py-2 px-4"
                      type="password"
                      name="pers_cla"
                      value={pers_cla}
                      onChange={this.changeHandler}
                    />
                  </div>
                </div>
                <div className="px-1 py-1 flex justify-between">

                  <div>
                  </div>
                </div>
              </div>

            </form>
            <div className="text-center">
              <button
                className="bg-gray-500 border-b-2 border-gray-600 rounded-lg hover:text-white p-3 ml-2"
                onClick={this.saveData}
              >
                <i className="fas fa-save"></i>
                <span className="mr-2"> Registrarme</span>
              </button>
              <button
                className="bg-blue-700 border-b-2 border-blue-600 rounded-lg hover:text-white p-3 ml-2"
                onClick={() => this.props.history.push("/patientlogin")}
              >
                <i className="fas fa-user-plus px-1"></i>
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-auto hidden lg:block md:block lg:w-1/2 md:w-1/2 h-screen bg-yellow-300 lg:p-20 md:p-12">
          <h1>Creando una cuenta con nosotros accedes a:</h1>
          <div className="p-4">
            <p>
              <i className="fas fa-check-circle px-1"></i>
              Agenda una cita en nuestros horarios disponibles para tí desde la
              comodidad de tu hogar.
            </p>
            <p>
              <i className="fas fa-check-circle px-1"></i>
              Consultar el historial de reservas realizadas.
            </p>
          </div>
          <img src={register} alt="register" />
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
