import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Menu from '../patient/components/Menu'


class Reserve extends Component {
    render() {
        const paciente_img = require("../../../assets/appointment_system/patient/paciente.jpg");
        return (
            <div>
                <Menu />
                <div className="bg-green-400 float-right h-screen w-5/6">
                    <div className="bg-yellow-400 h-16 w-full flex justify-end border-b-2 border-green-500">
                        <button
                            className="lg:text-xl md:text-xl text-sm px-8"
                        >
                            <p>NAME PATIENT</p>
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
                                        onClick={() => this.props.history.push("/patientupdatepassword")}
                                    >
                                        <i className="fas fa-key px-1"></i>
                                  Cambiar Contraseña
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
                    <div className =" px-5">
                    <p className="text-xl px-10 pt-10">USUARIO | RESERVAR UNA CITA</p>
                    <div className="flex items-center py-4">
                        <i className="fas fa-user px-1"></i>
                        <p className="px-2">* Especialización médica:</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="px-1">
                            <select
                                className="border-2 h-10 w-3/6 rounded-lg"
                                name="pers_tip_ide_id"
                                value={""}
                                onChange={this.changeHandler}
                            >
                                <option value="">Seleccione...</option>
                                {/*persona_tipo_identificacione.map((element) => (
                                    <option key={element.id} value={element.id}>
                                        {element.pers_tip_ide_des}
                                    </option>
                                ))*/}
                            </select>
                        </div>
                        <div className="flex items-center py-4">
                            <i className="fas fa-user px-1"></i>
                            <p className="px-2">* Doctor:</p>
                        </div>
                        <div className="px-1">
                            <select
                                className="border-2 h-10 w-3/6 rounded-lg"
                                name="pers_tip_ide_id"
                                value={""}
                                onChange={this.changeHandler}
                            >
                                <option value="">Seleccione...</option>
                                {/*persona_tipo_identificacione.map((element) => (
                                    <option key={element.id} value={element.id}>
                                        {element.pers_tip_ide_des}
                                    </option>
                                ))*/}
                            </select>
                        </div>
                        <div>
                            <div className="flex flex-row items-center py-4">
                                <i className="fas fa-user px-1"></i>
                                <p className="px-2">* Horarios de Consulta :</p>

                                <div className="px-1">
                                    <select
                                        className="border-2 h-10 w-full rounded-lg"
                                        name="pers_tip_ide_id"
                                        value={""}
                                        onChange={this.changeHandler}
                                    >
                                        <option value="">Seleccione...</option>
                                        {/*persona_tipo_identificacione.map((element) => (
                                    <option key={element.id} value={element.id}>
                                        {element.pers_tip_ide_des}
                                    </option>
                                ))*/}
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-row items-center py-4">
                                <i className="fas fa-user px-1"></i>
                                <p className="px-2">* Fecha :</p>

                                <div className="px-1">
                                    <select
                                        className="border-2 h-10 w-full rounded-lg"
                                        name="pers_tip_ide_id"
                                        value={""}
                                        onChange={this.changeHandler}
                                    >
                                        <option value="">dd/mm/aaaa</option>
                                        {/*persona_tipo_identificacione.map((element) => (
                                    <option key={element.id} value={element.id}>
                                        {element.pers_tip_ide_des}
                                    </option>
                                ))*/}
                                    </select>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-row items-center py-4">
                                <i className="fas fa-user px-1"></i>
                                <p className="px-2">* Tiempo :</p>

                                <div className="px-1">
                                    <select
                                        className="border-2 h-10 w-full rounded-lg"
                                        name="pers_tip_ide_id"
                                        value={""}
                                        onChange={this.changeHandler}
                                    >
                                        <option value="">00:00</option>
                                        {/*persona_tipo_identificacione.map((element) => (
                                    <option key={element.id} value={element.id}>
                                        {element.pers_tip_ide_des}
                                    </option>
                                ))*/}
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-start py-8">
                            <button
                                className="bg-yellow-500 rounded-lg hover:bg-yellow-400 p-3 mr-2"
                                onClick={this.registerUser}
                            >
                                Enviar
                          </button>
                    </div>
                </div>
            </div>
            
           </div> 
        )
    }
}

export default withRouter(Reserve);