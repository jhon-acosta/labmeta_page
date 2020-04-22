import React, { Component } from "react";
import { withRouter } from "react-router-dom";


import SideBar from './Sidebar/sidebar';

class Home_Paciente extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <div className="flex bg-green-500 lg:justify-center h-screen">
                    <div className=" w-1/3 p-20">
                        <div className="border-2 bg-yellow-400 text-center rounded-md">
                            <div className="flex flex-col py-4 px-4 mx-2 items-center text-justify">
                                <i className="fas fa-kiss-wink-heart text-6xl border border-green-400 p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
                                <p className="py-2 text-xl font-bold">Mi perfil</p>
                                <p className="w-64">
                                   En este apartado en contrara toda su informacion 
                                   registrada , la cual puede ser actualizada.Todo 
                                   cambio es bajo su resposabilidad
                                </p>
                                <button
                                   className="bg-green-500 lg:text-sm md:text-xl text-sm px-4 py-4 hover:bg-green-500 hover:text-white rounded-lg"
                                   onClick={() => this.props.history.push("/login")}
                                 >
                                     Actualizacion del perfil
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 p-20">
                        <div className="border-2 bg-yellow-400 text-justify rounded-md">
                            <div className="flex flex-col py-4 px-4 mx-2 items-center text-justify">
                                <i className="fas fa-file-medical-alt text-6xl border border-green-400 p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
                                <p className="py-2 text-xl font-bold">Mis citas</p>
                                <p className="w-64">
                                    En este apartado encontrara toda su historia clinico 
                                    realizada en Labmeta S.A detallando la fecha y hora 
                                    de cuando fue realizada.
                               </p>
                               <button
                                   className="bg-green-500 lg:text-sm md:text-xl text-sm px-4 py-4 hover:bg-green-500 hover:text-white rounded-lg"
                                   onClick={() => this.props.history.push("/login")}
                                 >
                                     Ver historial de Citas
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 p-20">
                        <div className="border-2 bg-yellow-400 text-center rounded-md">
                            <div className="flex flex-col py-4 px-4 mx-2 items-center text-justify">
                                <i className="fas fa-book-medical text-6xl border border-green-400 p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
                                <p className="py-2 text-xl font-bold">Reserve mi cita</p>
                                <p className="w-64">
                                   En este partado puede realizar citas, las cuales
                                   se acomoden a su horario donde tambien puede 
                                   verficar una cita ya reservada.
                                </p>
                                <button
                                   className="bg-green-500 lg:text-sm md:text-xl text-sm px-4 py-4 hover:bg-green-500 hover:text-white rounded-lg"
                                   onClick={() => this.props.history.push("/login")}
                                 >
                                     Revervar una Cita
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Home_Paciente);