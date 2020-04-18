import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

class QuienesSomos extends Component {
  render() {
    const logo = require("../../assets/logo.jpeg");
    return (
      <div className="font-hairline">
        <Header />
        <div className="flex bg-white h-auto">
          <div className="flex flex-col self-center items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div className="py-4">
              <h2 className="text-2xl text-gray-800 lg:text-3xl font-bold">
                ¿Quiénes Somos?.
              </h2>
              <p className="mt-2 text-sm md:text-base text-justify">
                Somos una institución de salud privada, con sentido social que
                apoya al sector empresarial e institucional en la búsqueda del
                mejoramiento continuo de la calidad de la vida de los
                trabajadores, a través de un servicio personalizado de alta
                calidad, confiabilidad, diagnostico, calificación, capacitación,
                seguimiento en y asesoría, con el fin de superar las
                expectativas de nuestros clientes.
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-2xl text-gray-800 md:text-3xl font-bold">
                Filosofía.
              </h2>
              <p className="mt-2 text-sm md:text-base text-justify">
                Nuestra filosofía de trabajo es la satisfacción del cliente, a
                través del cumplimiento de los tiempos de entrega, garantía en
                la confidencialidad de los análisis, precios competitivos y
                comunicación permanente y oportuna.
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-2xl text-gray-800 md:text-3xl font-bold">
                Calidad del Servicio.
              </h2>
              <p className="mt-2 text-sm md:text-base text-justify">
                Todos son exámenes realizados por profesionales y especialistas
                en Salud Ocupacional con ALTA experiencia en riesgos
                profesionales, con un enfoque preventivo y ocupacional de
                acuerdo al cargo, el servicio se ajusta a las necesidades del
                cliente.
              </p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 self-center">
            <div className="h-full object-cover">
              <img alt="pic" src={logo} className="opacity-75" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(QuienesSomos);
