import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

class Ecografia extends Component {
  render() {
    const ecografia1 = require("../../assets/website/ecografia1.jpg");
    return (
      <div className="font-hairline">
        <Header />
        <div className="py-8 lg:px-32 md:px-32 px-8 bg-gray-300 flex flex-col">
          <h1 className="text-center lg:text-4xl md:text-4xl text-2xl font-bold text-green-700">
            Ecografía
          </h1>
          <p className="text-justify lg:text-2xl md:text-2xl text-md text-green-700">
            La ecografía o ultrasonido es un tipo de imagen. Utiliza ondas
            sonoras de alta frecuencia para observar órganos y estructuras al
            interior del cuerpo.
          </p>
          <p className="text-justify lg:px-32 py-2 lg:text-xl md:text-xl text-sm">
            Los profesionales de la salud los usan para ver el corazón, los
            vasos sanguíneos, los riñones, el hígado y otros órganos.
          </p>
          <p className="text-justify lg:px-32 py-2 lg:text-xl md:text-xl text-sm">
            Durante el embarazo, los médicos usan las pruebas con ultrasonido
            para observar al feto. A diferencia de las radiografías, la
            ecografía no expone a la radiación.
          </p>
          <img src={ecografia1} alt="pic" className="py-2" />
          <p className="text-center lg:text-4xl md:text-3xl text-2xl font-bold py-4 text-green-700">
            Llame a LABMETA S.A, Laboratorios Médicos de Tecnología Avanzada
          </p>

          <p className="text-center text-green-700 text-xl">
            (02) 2503238 - 2503037
          </p>
          <p className="text-center text-green-700 text-xl">
            (+593) 0996031288
          </p>

          <p className="text-center text-green-700 text-2xl font-bold py-2">
            COSTO DEL SERVICIO : $ 74.99
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Ecografia);
