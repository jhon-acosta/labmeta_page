import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Footer from "../website/components/Footer";


class Login extends Component {
  render() {
    return (
      <div className="font-hairline">
        <div className="text-center bg-yellow-500 px-64">

          <div className="px-64">
            <form className="py-1 bg-green-500 rounded-lg">
              <h1 className="py-8 text-4xl text font-medium" >INICIAR SESION</h1>
              <label >
                Correo Electronico:<br />
                <i className="fas fa-user px-1"></i>
                <input type="text" name="name" placeHolder="Ingresa tu Correo Electronico" className="border-2 w-64 h-10" />
              </label>
              <br /><br />
              <label>
                Contraseña:<br />
                <i className="fas fa-key px-1"></i>
                <input type="text" name="name" placeHolder="Ingresa tu Contraseña" className="border-2 w-64 h-10" />
              </label> <br /><br />
              <input type="submit" value="Ingresar" className="bg-yellow-500 w-24 h-10  rounded-lg" />
              <br /><br />
              <a href="/" className="hover:text-yellow-600">Registrate</a><br /><br />
              <a href="/" className="hover:text-yellow-600">Olvidaste tu Contraseña?</a>
            </form>
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Login);
