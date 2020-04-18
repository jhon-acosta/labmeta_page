import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

class Ginecologia extends Component {
  render() {
    const ginecologia1 = require("../../assets/website/ginecologia1.jpg");
    return (
      <div className="font-hairline">
        <Header />
        <div className="py-8 lg:px-32 md:px-32 px-8 bg-gray-300 flex flex-col">
          <h1 className="text-center lg:text-4xl md:text-4xl text-2xl font-bold text-green-700">
            Ginecología
          </h1>
          <p className="text-justify lg:text-2xl md:text-2xl text-md text-green-700">
            La especialidad de Ginecología y Obstetricia es el campo de la
            medicina que se ocupa de la salud integral de la muje
          </p>
          <p className="text-justify lg:px-32 py-2 lg:text-xl md:text-xl text-sm">
            En el caso concreto de la ginecología, los especialistas que
            desarrollan su labor en este campo trabajan en el diagnóstico y
            tratamiento
          </p>
          <p className="text-justify lg:px-32 py-2 lg:text-xl md:text-xl text-sm">
            la especialidad engloba todos lo relacionado con los problemas de
            infertilidad, tanto en el aspecto diagnóstico como en todo lo
            referido a los tratamientos de reproducción asistida en sus
            distintas variantes (inducción de ovulación, inseminación
            artificial, fecundación in vitro, microinyección espermática,
            diagnóstico genético preimplantacional, etc.).
          </p>
          <img src={ginecologia1} alt="pic" className="py-2" />
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
            COSTO DEL SERVICIO : $ 109.99
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Ginecologia);
