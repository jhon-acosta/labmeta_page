import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const API = "http://localhost:5000/labmeta/";

class Appointmentstates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_header: {
        cita_est_des: "Descripción",
      },
      appointmentstates: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API}cita_estado`)
      .then((response) => {
        this.setState({ appointmentstates: response.data.datos });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateData = (p_id, p_cita_est_des) => {
    localStorage.setItem("id", p_id);
    localStorage.setItem("cita_est_des", p_cita_est_des);
    this.props.history.push("/updateappointmentstate");
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
        axios.delete(`${API}cita_estado?id=${value}`, {
          data: { id: value },
        });
        Swal.fire({
          icon: "success",
          title: "Eliminado exitosamente!",
          showConfirmButton: false,
          timer: 1000,
        }).then(() =>
          window.location.assign("http://localhost:3000/appointmentstates")
        );
      }
    });
  };

  render() {
    const { appointmentstates } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="flex flex-col ml-48 p-4">
          <div className="py-4">
            <div className="justify-center my-5 select-none flex">
              <p className="mt-5 text-center mr-10 text-2xl">
                Estados de citas.
              </p>
            </div>
            <div className="px-3 py-4 flex justify-center">
              <table className="w-full text-md bg-white shadow-md rounded mb-4 text-center">
                <thead className="border-b">
                  <tr>
                    <th></th>
                    <th className="p-3 px-5">
                      {this.state.table_header.cita_est_des}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td>
                      {appointmentstates.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          <button
                            onClick={() =>
                              this.updateData(element.id, element.cita_est_des)
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
                      {appointmentstates.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.cita_est_des}
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

export default withRouter(Appointmentstates);
