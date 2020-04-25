import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const API = "http://localhost:5000/labmeta/";

class Addservice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serv_nom: "",
      serv_des: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  saveData = (e) => {
    e.preventDefault();
    this.post = {
      datos: {
        serv_nom: this.state.serv_nom,
        serv_des: this.state.serv_des,
      },
    };
    if (this.post.datos.serv_nom === "" || this.post.datos.serv_des === "") {
      Swal.fire("", "Complete todos los datos para continuar...!");
    } else {
      axios
        .post(API + "servicio", this.post)
        .then((response) => {
          if (response.data.ok === true) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Agregado exitosamente",
              showConfirmButton: false,
              timer: 1000,
            }).then(() =>
              this.props.history.push("/admin/parameters/services")
            );
          }
        })
        .catch((error) => {
          alert("Datos Incorrectos");
        });
    }
  };

  render() {
    const { serv_nom, serv_des } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="flex flex-col ml-48 p-4">
          <form className="py-16 px-64 flex items-center justify-between">
            <div className="flex flex-col">
              <div>
                <h1 className="uppercase text-xs font-bold py-2 px-2">
                  Nombre del servicio *
                </h1>
                <div className="px-1 flex-1">
                  <input
                    className="border border-gray-500 rounded py-2 px-4"
                    type="text"
                    name="serv_nom"
                    value={serv_nom}
                    onChange={this.changeHandler}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div>
                <h1 className="uppercase text-xs font-bold py-2 px-2">
                  Descripción *
                </h1>
                <div className="px-1 flex-1">
                  <textarea
                    className="border border-gray-500 rounded py-2 px-4"
                    type="text"
                    name="serv_des"
                    value={serv_des}
                    onChange={this.changeHandler}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              onClick={this.saveData}
            >
              <i className="fas fa-save"></i>
              <span className="ml-2">Guardar</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Addservice);
