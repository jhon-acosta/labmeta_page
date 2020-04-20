import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Background from '../Form/doctorImg.jpg';
import './writing.css'

class Form extends Component {
    render() {
        const logo_img = require('../../../assets/logo.jpeg')
        return (
            <div>
                <div className="bg-green-400 float-left w-1/2 h-screen ">
                    <h1 className="text-center font-semibold text-3xl">Forma de Registro</h1>
                    <div className="float-left w-1/2 p-2">
                        <label>
                            <p className="pt-4"><i className="fas fa-user px-1"></i>Nombres y Apellidos:</p>
                            <input type="text" name="name" placeHolder="Nombres" className="border-2 w-full h-10 rounded-lg" />
                        </label>
                        <label className="pl-2">
                            <p className="pt-4"><i className="fas fa-user px-1"></i>Primer Apellido</p>
                            <input type="text" name="name" placeHolder="Apellido Paterno" className="border-2 w-full h-10 rounded-lg" />
                        </label>
                        <label className="pl-2">
                            <p className="pt-4"><i className="fas fa-user px-1"></i>Segundo Apellido</p>
                            <input type="text" name="name" placeHolder="Apellido Materno" className="border-2 w-full h-10 rounded-lg" />
                        </label>
                        <label >
                            <p className="pt-4">Identificación:</p>
                            <select value="" onChange="" className="border-2 w-full h-10 rounded-lg">
                                <option value="C.I">C.I</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="RUC">RUC</option>
                            </select>
                        </label>
                        <label className="pl-4">
                            <p className="pt-4">Ingrese:</p>
                            <input type="text" name="name" placeHolder="123456789-0" className="border-2 w-full h-10 rounded-lg" />
                        </label>
                        <label className="pl-4">
                            <p className="pt-4">Pais:</p>
                            <select name="pais" className="border-2 w-full h-10 rounded-lg">
                              
                                <option value="CU">Cuba</option>
                                <option value="DK">Dinamarca</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="EC" selected>Ecuador</option>
                                <option value="EG">Egipto</option>
                                <option value="SV">El Salvador</option>
                                <option value="AE">Emiratos Árabes Unidos</option>
                                <option value="ER">Eritrea</option>
                                <option value="SI">Eslovenia</option>
                            </select>
                        </label>
                        <label className="pl-4">
                            <p className="pt-4">Telefono Celular:</p>
                            <input type="text" name="name" placeHolder=" 0987654321" className="border-2 w-full h-10 rounded-lg" />
                        </label>
                    </div>

                    <div className="float-right w-1/2 p-2">
                        <label>
                            <p className="pt-4">Fecha nacimiento: </p><input type="date" name="fechaNacimientp" step="1" value="2013-01-01" className="border-2 w-full h-10 rounded-lg" />
                        </label>
                        <label >
                            <p className="pt-4">Genero:</p>
                            <select value="" onChange="" className="border-2 w-full h-10 rounded-lg">
                                <option >Seleccione...</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </label>
                        <div>
                            <label >
                                <p className="pt-4">Correo Electronico:</p>
                                <input type="text" name="name" placeHolder="Example: labmeta@gamil.com" className="border-2 w-full h-10 rounded-lg" />
                            </label>
                            <label >
                                <p className="pt-4">Contraseña:</p>
                                <input type="text" name="name" placeHolder="***********" className="border-2 w-full h-10 rounded-lg" />
                            </label>
                            <label >
                                <p className="pt-4">Confirmar Contraseña:</p>
                                <input type="text" name="name" placeHolder="***********" className="border-2 w-full h-10 rounded-lg" />
                            </label>
                            <label>
                                <p className="py-4 text-sm text-center">Revisa que todos los campos se encuentren correctamente ingresados.</p>
                                <input type="button" value="REGISTRARME" className="bg-greeen-400  w-full h-10 rounded-lg cursor-pointer" onClick={() => this.props.history.push("/")} />
                            </label>
                        </div>
                    </div>

                </div>
                <div className="float-right w-1/2">
                <div className="bg-yellow-500 text-green-700">
                    <div className="contenedor lg:h-16 text-center font-mono ">
                        <h2 className="text-center lg:text-5xl pl-4 md:text-xl">BIENVENIDO A LABMETA S.A.<span>&#160;</span></h2>
                        <img src = {logo_img} alt = "logo" className=" pl-64 w-28 h-24"/>
                        <p className="py-1 md:text-sm">Laboratorios Médicos de Tecnología Avanzada</p>
                    </div>
                </div>
                    <img src={Background} alt="background" />
                </div>
            </div>
        )
    }
}
export default withRouter(Form);