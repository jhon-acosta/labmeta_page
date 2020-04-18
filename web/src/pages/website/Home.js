import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Header from "./components/Header";
import Carousel from "./components/Carrousel";
import Footer from "./components/Footer";

class Home extends Component {
  render() {
    const home1 = require("../../assets/website/home1.jpg");
    return (
      <div className="font-hairline">
        <Header />

        <Carousel />

        <div className="flex items-center justify-center px-12 py-12">
          <div className="hidden lg:block lg:w-1/2 px-4">
            <div className="h-full object-cover">
              <img alt="pic" src={home1} className="opacity-75" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <h1 className="lg:text-4xl text-3xl font-bold text-green-400">
              Bienvenido a Labmeta S.A.
            </h1>
            <h3 className="lg:text-xl text-sm text-green-400">
              Laboratorios Médicos de Tecnología Avanzada
            </h3>
            <p className="mt-4 text-justify">
              A partir del año 1996 brindamos servicios de laboratorio clínico y
              radiológico con los más altos estándares de calidad. <br />
              Desde hace 24 años, nos levantamos todos los días con el firme
              propósito de entregar resultados confiables y oportunos a nuestros
              clientes para lo cual nuestra empresa cuenta con un staff de
              profesionales y técnicos especializados en actividades de
              laboratorio y salud ocupacional. <br />
              La confianza que depositan en nosotros y nuestra experiencia es,
              sin duda, nuestra mejor carta de presentación.
            </p>
          </div>
        </div>

        <div className="flex flex-col h-auto items-center lg:px-24 px-8 justify-center py-12 bg-green-400">
          <h1 className="lg:text-3xl text-2xl text-center font-bold">
            ¿Por qué escojer a Labmeta S.A.?
          </h1>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center">
              <i className="fas fa-map-marked-alt text-6xl border border-white p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
              <p className="py-2 text-xl font-bold">Ubicación</p>
              <p className="w-64">
                Zona preferente y céntrica de la ciudad de Quito
              </p>
            </div>
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center">
              <i className="fas fa-building text-6xl border border-white p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
              <p className="py-2 text-xl font-bold">Infraestructura</p>
              <p className="w-64">
                Nuestras salas para evaluaciones y tomas de muestras son
                específicas para las actividades y exámenes correspondientes.
              </p>
            </div>
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center">
              <i className="fas fa-flask text-6xl border border-white p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
              <p className="py-2 text-xl font-bold">Innovación</p>
              <p className="w-64">
                Nuestros equipos son totalmente automatizados y de alta
                precisión, con tecnología de última generación, que garantizan
                resultados confiables y precisos.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:px-24 justify-center py-4 bg-yellow-400">
          <h1 className="lg:text-3xl text-2xl font-bold">Nuestros servicios</h1>
          <div className="flex flex-wrap justify-center">
            <div
              className="flex flex-col py-4 px-4 mx-2 items-center text-center cursor-pointer"
              onClick={() => this.props.history.push("/cardiology")}
            >
              <img
                alt="pic"
                src={home1}
                className="lg:h-56 lg:w-56 md:h-56 md:w-56 sm:h-48 sm:w-48 h-32 w-32"
              />
              <p className="py-2 lg:text-xl md:text-xl text-sm font-bold">
                Cardiología
              </p>
            </div>
            <div
              className="flex flex-col py-4 px-4 mx-2 items-center text-center cursor-pointer"
              onClick={() => this.props.history.push("/rayx")}
            >
              <img
                alt="pic"
                src={home1}
                className="lg:h-56 lg:w-56 md:h-56 md:w-56 sm:h-48 sm:w-48 h-32 w-32"
              />
              <p className="py-2 lg:text-xl md:text-xl text-sm font-bold">
                Rayos X
              </p>
            </div>
            <div
              className="flex flex-col py-4 px-4 mx-2 items-center text-center cursor-pointer"
              onClick={() => this.props.history.push("/gynecology")}
            >
              <img
                alt="pic"
                src={home1}
                className="lg:h-56 lg:w-56 md:h-56 md:w-56 sm:h-48 sm:w-48 h-32 w-32"
              />
              <p className="py-2 lg:text-xl md:text-xl text-sm font-bold">
                Ginecología
              </p>
            </div>
            <div
              className="flex flex-col py-4 px-4 mx-2 items-center text-center cursor-pointer"
              onClick={() => this.props.history.push("/echography")}
            >
              <img
                alt="pic"
                src={home1}
                className="lg:h-56 lg:w-56 md:h-56 md:w-56 sm:h-48 sm:w-48 h-32 w-32"
              />
              <p className="py-2 lg:text-xl md:text-xl text-sm font-bold">
                Ecografía
              </p>
            </div>
            <div
              className="flex flex-col py-4 px-4 mx-2 items-center text-center cursor-pointer"
              onClick={() => this.props.history.push("/hermatology")}
            >
              <img
                alt="pic"
                src={home1}
                className="lg:h-56 lg:w-56 md:h-56 md:w-56 sm:h-48 sm:w-48 h-32 w-32"
              />
              <p className="py-2 lg:text-xl md:text-xl text-sm font-bold">
                Hermatología
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Home);
