import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

class Cardiologia extends Component {
  render() {
    const cardiologia1 = require("../../assets/website/cardiologia1.jpg");
    return (
      <div className="font-hairline">
        <Header />
        <div className="py-8 lg:px-32 md:px-32 px-8 bg-gray-300 flex flex-col">
          <h1 className="text-center lg:text-4xl md:text-4xl text-2xl font-bold text-green-700">
            Cardiología
          </h1>
          <p className="text-justify lg:text-2xl md:text-2xl text-md text-green-700">
            La cardiología es una rama de la medicina. Para obtener el título de
            cardiólogo los requisitos son variables dependiendo del país
            concreto. En general se requieren ser licenciado en medicina y
            cirugÍa.
          </p>
          <p className="text-justify lg:px-32 py-2 lg:text-xl md:text-xl text-sm">
            Cardiología clínica, es decir todo lo relacionado con la asistencia
            directa a pacientes y la toma de decisiones sobre como actuar en la
            situación individual de cada uno de ellos.
          </p>
          <p className="text-justify lg:px-32 py-2 lg:text-xl md:text-xl text-sm">
            Las áreas de estudio incluyen: anatomía cardiovascular, metabolismo
            y fisiología cardiovascular, biología molecular del sistema
            cardiovascular, patología cardiovascular, farmacología
            cardiovascular, ecocardiografía, electrofisiología y marcapasos,
            cateterismo cardíaco, cardiología nuclear,
          </p>
          <img src={cardiologia1} alt="pic" className="py-2" />
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
            COSTO DEL SERVICIO : $ 99.99
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Cardiologia);
