import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class Sidebar extends Component {
    render() {
        const logo = require('../../../assets/logo.jpeg')
        const paciente_img = require('../Sidebar/paciente.jpg')
        return (
            <div>
                <div className="h-16 bg-yellow-400 lg:px-20 md:px-20 px-4 justify-end flex items-center">
                <div className="flex pr-64">
                        <img src={logo} alt="logo" className="w-16 h-16 rounded-full" />
                    </div>
                <button
                        className="lg:text-xl h-16 md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white"
                        onClick={() => this.props.history.push("/whoweare")}
                    ><p><i className="fas fa-house-user px-1"></i>Inicio</p>
                        </button>
                <button
                        className="lg:text-xl h-16 md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white"
                        onClick={() => this.props.history.push("/whoweare")}
                    ><p><i className="fas fa-clipboard-list px-1"></i>Reservar una Cita</p>
                        </button>
                <button
                        className="lg:text-xl h-16 md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white "
                        onClick={() => this.props.history.push("/whoweare")}
                    ><p><i className="fas fa-history px-1"></i>Historial Clinico</p>
                        </button>

                    <div className="flex px-2">
                        <img src={paciente_img} alt="logo" className="w-14 h-14 rounded-md" />
                    </div>
                    <button
                        className="lg:text-xl md:text-xl text-sm px-4 hover:text-white"
                        onClick={() => this.props.history.push("/whoweare")}
                    ><p>ESTER EXPOSITO</p>
                        </button>
                    <div className="flex flex-row flex-wrap justify-center py-1 lg:justify-center md:justify-start">
                        <div className="group relative">
                            <button className="lg:text-xl w-full md:text-xl text-sm px-10 hover:text-white">
                                <i className="fas fa-angle-down px-1"></i>
                            </button>
                            <div className="hidden group-hover:block absolute w-full bg-yellow-400 z-10 border-green-500 border-2">
                                <button
                                    className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 text-sm w-full"
                                    onClick={() => this.props.history.push("/cardiology")}
                                >
                                     <p> <i className="fas fa-user px-1"></i> Mi perfil</p>
                               </button>
                                <button
                                    className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 text-sm w-full"
                                    onClick={() => this.props.history.push("/rayx")}
                                >
                                    <i className="fas fa-key px-1"></i>
                                    Cambiar Contrasena
                               </button>
                                <button
                                    className="block text-left py-3 lg:px-3 md:px-3 px-1 hover:bg-green-500 text-sm w-full"
                                    onClick={() => this.props.history.push("/gynecology")}
                                >
                                    <i className="fas fa-door-closed px-1"></i>
                                  Cerrar Sesión
                               </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Sidebar);