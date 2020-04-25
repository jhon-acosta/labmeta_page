import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const API = "http://localhost:5000/labmeta/";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pers_dat: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `${API}persona?pers_cor_ele=${localStorage.getItem(
          "pers_cor_ele_login"
        )}`
      )
      .then((response) => {
        this.setState({ pers_dat: response.data.datos[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Salir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sesión cerrada exitosamente!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          localStorage.clear();
          this.props.history.push("/admin/login");
        });
      }
    });
  };

  render() {
    const logo = require("../../../../assets/logo2.jpeg");
    const { pers_dat } = this.state;
    return (
      <header className="fixed flex h-12 w-full bg-gray-500 border border-1 border-gray-600 items-center justify-between">
        <div className="ml-2 flex items-center h-full">
          <div className="flex items-center text-center h-full w-48">
            <img src={logo} alt="login" className="rounded" />
          </div>
        </div>
        <div className="items-center h-full text-sm">
          <div className="items-center h-full">
            <div className="group relative h-full">
              <button className="items-center h-full hover:bg-gray-600 px-4">
                <i className="fas fa-user mr-2"></i>
                {pers_dat.pers_nom}
                <i className="fas fa-angle-down ml-2"></i>
              </button>
              <div className="hidden group-hover:block absolute pin-r top-auto w-full bg-gray-500 border border-1 border-gray-600">
                {/* <button className="block text-left py-3 px-3 hover:bg-gray-600 text-xs w-full">
                  <i className="fas fa-user-edit mr-2"></i>
                  Cambiar contraseña
                </button> */}
                <button
                  className="block text-left py-3 px-3 hover:bg-gray-600 text-xs w-full"
                  onClick={() => this.logout()}
                >
                  <i className="fas fa-sign-out-alt mr-2"></i>
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
