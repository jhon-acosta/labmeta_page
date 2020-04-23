import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const API = "http://localhost:5000/labmeta/";

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_header: {
        persona_identificacion: "Identificación",
        persona_nombre: "Nombre",
        persona_email: "Correo Electrónico",
      },
      employees: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API}persona?pers_tip_id=3`)
      .then((response) => {
        this.setState({ employees: response.data.datos });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateData = (
    p_id,
    p_pers_nom,
    p_pers_tip_ide_id,
    p_pers_ide,
    p_pers_tel,
    p_pers_fec_nac,
    p_pers_dir,
    p_pers_gen_id,
    p_pers_cor_ele,
    p_pers_fot
  ) => {
    localStorage.setItem("id", p_id);
    localStorage.setItem("pers_nom", p_pers_nom);
    localStorage.setItem("pers_tip_ide_id", p_pers_tip_ide_id);
    localStorage.setItem("pers_ide", p_pers_ide);
    localStorage.setItem("pers_tel", p_pers_tel);
    localStorage.setItem("pers_fec_nac", p_pers_fec_nac);
    localStorage.setItem("pers_dir", p_pers_dir);
    localStorage.setItem("pers_gen_id", p_pers_gen_id);
    localStorage.setItem("pers_cor_ele", p_pers_cor_ele);
    localStorage.setItem("pers_fot", p_pers_fot);
    this.props.history.push("/admin/updateemployee");
  };

  deleteData = (value) => {
    Swal.fire({
      title: "¿Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.value) {
        axios.delete(`${API}persona?id=${value}`, {
          data: { id: value },
        });
        Swal.fire({
          icon: "success",
          title: "Eliminado exitosamente!",
          showConfirmButton: false,
          timer: 1000,
        }).then(() =>
          window.location.assign("http://localhost:3000/admin/employees")
        );
      }
    });
  };

  render() {
    const { employees } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="flex flex-col ml-48 p-4">
          <div className="py-4">
            <div className="justify-center my-5 select-none flex">
              <p className="mt-5 text-center mr-10 text-2xl">Empleados.</p>
            </div>
            <div className="px-3 py-4 flex justify-center">
              <table className="w-full text-md bg-white shadow-md rounded mb-4 text-center">
                <thead className="border-b">
                  <tr>
                    <th></th>
                    <th className="p-3 px-5">
                      {this.state.table_header.persona_identificacion}
                    </th>
                    <th className="p-3 px-5">
                      {this.state.table_header.persona_nombre}
                    </th>
                    <th className="p-3 px-5">
                      {this.state.table_header.persona_email}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td>
                      {employees.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          <button
                            onClick={() =>
                              this.updateData(
                                element.id,
                                element.pers_nom,
                                element.pers_tip_ide_id,
                                element.pers_ide,
                                element.pers_tel,
                                element.pers_fec_nac,
                                element.pers_dir,
                                element.pers_gen_id,
                                element.pers_cor_ele,
                                element.pers_cla,
                                element.pers_fot,
                                element.pers_tip_id
                              )
                            }
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <button
                            onClick={() => this.deleteData(element.id)}
                            className="mr-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </p>
                      ))}
                    </td>
                    <td>
                      {employees.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.pers_ide}
                        </p>
                      ))}
                    </td>
                    <td>
                      {employees.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.pers_nom}
                        </p>
                      ))}
                    </td>
                    <td>
                      {employees.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.pers_cor_ele}
                        </p>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Employees);
