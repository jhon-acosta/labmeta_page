import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const API = "http://localhost:5000/labmeta/";

class appointmentHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_header: {
        id: "N°",
        pers_id_doc: "Doctor",
        pers_id_pac: "Paciente",
        serv_id: "Servicio",
        cita_det_fec_res: "Fecha de la cita",
        cita_hor_id: "Hora de la cita",
        cita_est_id: "Estado",
      },
      appointmentHistory: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${API}appointmenthistory`)
      .then((response) => {
        this.setState({ appointmentHistory: response.data.datos });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { appointmentHistory } = this.state;
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="flex flex-col ml-48 p-4">
          <div className="py-4">
            <div className="justify-center my-5 select-none flex">
              <p className="mt-5 text-center mr-10 text-2xl">
                Historial de Citas.
              </p>
            </div>
            <div className="px-3 py-4 flex justify-center">
              <table className="w-full text-md bg-white shadow-md rounded mb-4 text-center">
                <thead className="border-b">
                  <tr>
                    <th className="p-3 px-5">{this.state.table_header.id}</th>
                    <th className="p-3 px-5">
                      {this.state.table_header.pers_id_doc}
                    </th>
                    <th className="p-3 px-5">
                      {this.state.table_header.pers_id_pac}
                    </th>
                    <th className="p-3 px-5">
                      {this.state.table_header.serv_id}
                    </th>
                    <th className="p-3 px-5">
                      {this.state.table_header.cita_det_fec_res}
                    </th>
                    <th className="p-3 px-5">
                      {this.state.table_header.cita_hor_id}
                    </th>
                    <th className="p-3 px-5">
                      {this.state.table_header.cita_est_id}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-orange-100 bg-gray-100">
                    <td>
                      {appointmentHistory.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.id}
                        </p>
                      ))}
                    </td>
                    <td>
                      {appointmentHistory.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.pers_id_doc}
                        </p>
                      ))}
                    </td>
                    <td>
                      {appointmentHistory.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.pers_id_pac}
                        </p>
                      ))}
                    </td>
                    <td>
                      {appointmentHistory.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.serv_id}
                        </p>
                      ))}
                    </td>
                    <td>
                      {appointmentHistory.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.cita_det_fec_res}
                        </p>
                      ))}
                    </td>
                    <td>
                      {appointmentHistory.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.cita_hor_id}
                        </p>
                      ))}
                    </td>
                    <td>
                      {appointmentHistory.map((element) => (
                        <p className="p-2 px-5" key={element.id}>
                          {element.cita_est_id}
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

export default withRouter(appointmentHistory);
