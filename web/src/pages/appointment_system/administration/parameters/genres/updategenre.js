import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const API = "http://localhost:5000/labmeta/";

class UpdateGenre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.getItem("id"),
      pers_gen_des: localStorage.getItem("pers_gen_des"),
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateData = (e) => {
    e.preventDefault();
    this.update = {
      datos: {
        id: this.state.id,
        pers_gen_des: this.state.pers_gen_des,
      },
    };

    if (this.update.datos.id === "" || this.update.datos.pers_gen_des === "") {
      Swal.fire("", "Complete todos los datos para continuar...!");
    } else {
      axios
        .put(`${API}persona_genero?id=${this.state.id}`, this.update)
        .then((response) => {
          if (response.data.ok === true) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Actualizado correctamente",
              showConfirmButton: false,
              timer: 1000,
            }).then(() => {
              this.props.history.push("/admin/parameters/genres");
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { pers_gen_des } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="flex flex-col ml-48 p-4">
          <form className="py-16 px-64 flex items-center">
            <h1 className="uppercase text-xs font-bold py-2 px-2">
              Descripción *
            </h1>
            <div className="px-1 flex-1">
              <input
                className="border border-gray-500 rounded py-2 px-4"
                type="text"
                name="pers_gen_des"
                value={pers_gen_des}
                onChange={this.changeHandler}
                autoComplete="off"
              />
            </div>
            <button
              className="bg-gray-300 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              onClick={this.updateData}
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

export default withRouter(UpdateGenre);
