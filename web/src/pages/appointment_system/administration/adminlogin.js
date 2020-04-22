import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5000/labmeta/login";

class AdminLogin extends Component {
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
            localStorage.setItem("pers_cor_ele_login", this.state.pers_cor_ele);
            this.props.history.push("/adminhome");
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
    const bg_login = require("../../../assets/appointment_system/administration/bg-login.jpg");
    return (
      <div
        className="container max-w-full mx-auto h-screen py-20 px-56"
        style={{ backgroundImage: `url(${bg_login})`, backgroundSize: "100%" }}
      >
        <div className="font-sans bg-gray-100 mx-64 py-2 rounded">
          <div className="max-w-sm mx-auto px-6">
            <div className="relative flex flex-wrap">
              <div className="w-full relative">
                <div className="mt-6">
                  <div className="mb-5 pb-1border-b-2 flex justify-center font-base text-gray-700">
                    <img src={logo} alt="login" className="rounded w-28 h-24" />
                  </div>
                  <form className="mt-8">
                    <div className="mx-auto max-w-lg">
                      <div className="py-2">
                        <span className="px-1 text-sm text-gray-600">
                          Correo Electrónico
                        </span>
                        <input
                          className="text-md block px-3 py-2  rounded-lg w-full 
                                      bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          type="text"
                          name="pers_cor_ele"
                          value={pers_cor_ele}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div className="py-2" x-data="{ show: true }">
                        <span className="px-1 text-sm text-gray-600">
                          Contraseña
                        </span>
                        <div className="relative">
                          <input
                            className="text-md block px-3 py-2 rounded-lg w-full 
                                          bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                                          focus:placeholder-gray-500
                                          focus:bg-white 
                                          focus:border-gray-600  
                                          focus:outline-none"
                            type="password"
                            name="pers_cla"
                            value={pers_cla}
                            onChange={this.changeHandler}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <label className="block text-gray-500 font-bold my-4"></label>
                        <label className="block text-gray-500 font-bold my-4">
                          <button className="tracking-tighter text-black text-sm border-b-2 border-gray-200 hover:border-gray-400">
                            ¿Olvido su contraseña?
                          </button>
                        </label>
                      </div>
                      <button
                        className="mt-3 text-lg font-semibold bg-blue-500 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-blue-700"
                        onClick={this.loginAccess}
                      >
                        Ingresar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminLogin);
