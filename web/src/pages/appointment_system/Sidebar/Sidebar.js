import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './Sidebar.css'

class Sidebar extends Component {
    render() {
        const paciente = require('./paciente.jpg')
        return (
            <div>
                <input type="checkbox" id="check"></input>
                <label for="check">
                    <i className="fas fa-bars" id="btn"></i>
                    <i className="fas fa-times" id="cancel"></i>
                </label>

                <div className="bg-yellow-600 h-16 flex justify-end p-2 group">
                    <button className="lg:text-xl md:text-xl text-sm px-4 hover:text-white">
                        <i className="fas fa-caret-square-down px-1"></i>
                        Manu Vargas
                  </button>
                    <div className="hidden group-hover:block absolute w-2/12 bg-yellow-400 z-10 p10">
                        <button
                            className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 hover:text-white text-sm w-full"
                            onClick={() => this.props.history.push("/")}
                        >
                            Mi perfil
                        </button>
                        <button
                            className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 hover:text-white text-sm w-full"
                            onClick={() => this.props.history.push("/")}
                        >
                            Cambiar Contrasena
                        </button>
                        <button
                            className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 hover:text-white text-sm w-full"
                            onClick={() => this.props.history.push("/")}
                        >
                            Cerrar Sesion
                        </button>
                    </div>
                    <img src={paciente} alt='paciente' className="w-12 h-12 rounded-lg" />
                </div>

                <div className="sidebar">
                    <header>Menú</header>
                    <ul>
                        <li><a href="/"><i className="fas fa-home px-1"></i>Inicio</a> </li>
                        <li><a href="/"><i className="fas fa-clock px-1"></i>Reservar Cita</a> </li>
                        <li><a href="/"><i className="fas fa-list px-1"></i>Historial de Citas</a> </li>
                    </ul>
                </div>
            <div className ="w-full">
                dadsadsa
            </div>

            </div>
        )
    }
}
export default withRouter(Sidebar);