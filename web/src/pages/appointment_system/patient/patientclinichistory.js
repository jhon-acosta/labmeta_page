import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";


import Menu from '../patient/components/Menu'

const API = "http://localhost:5000/labmeta/";



class Clinichistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pers_data: [],
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
            this.setState({ pers_data: response.data.datos[0] });
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
              this.props.history.push("/");
            });
          }
        });
      };
    render() {
        const paciente_img = require("../../../assets/appointment_system/patient/paciente.jpg");
        const { pers_data } = this.state;
        return (
            <div>
                <Menu />
                <div className="bg-green-400 float-right h-screen w-5/6">
                    <div className="bg-yellow-400 h-16 w-full flex justify-end border-b-2 border-green-500">
                        <button
                            className="lg:text-xl md:text-xl text-sm px-8"
                        >
                           <p>  {pers_data.pers_nom}  </p>
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
                                        onClick={() => this.logout()}
                                    >
                                        <i className="fas fa-door-closed px-1"></i>
                                         Cerrar Sesión
                                 </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <p className="text-xl px-10 pt-10">USUARIO | HISTORIA CLINICA</p>
                        <table className="table-auto">
                            <thead>
                                <tr className ="border">
                                    <th className="border px-4 py-2">#</th>
                                    <th className="border px-4 py-2">Nombre del Doctor</th>
                                    <th className="border px-4 py-2">Especialización</th>
                                    <th className="border px-4 py-2">Fecha/ hora de la cita</th>
                                    <th className="border px-4 py-2">Fecha de creacion de la cita</th>
                                    <th className="border px-4 py-2">Estado actual</th>
                                    <th className="border px-4 py-2">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                </tr>
                                <tr className="">
                                    
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                </tr>
                                <tr>
                                    
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                </tr>
                                <tr>
                                    
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Clinichistory);