import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Header from '../components/Header';
import Carousel from '../components/Carrousel';
import Footer from "../components/Footer"

class Home extends Component {
  render() {
    const logo = require("../assets/logo.jpeg")
    const image1 = require("../assets/home/test1.jpg")
    return(
      <div>
        <Header />

        <Carousel />

        <div className="flex items-center justify-center px-12 py-12">
          <div class="hidden lg:block lg:w-1/2">
            <div class="h-full object-cover">
              <img alt="pic" src={ image1 } className="opacity-75" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <h1 className="lg:text-5xl text-2xl font-bold text-green-400">Bienvenido a Labmeta S.A.</h1>
            <h3 className="lg:text-xl text-sm text-green-400">Laboratorios Médicos de Tecnología Avanzada</h3>
            <p className="mt-4 text-justify">A partir del año 1996 brindamos servicios de laboratorio clínico y radiológico con los más
            altos estándares de calidad. <br />
            Desde hace 24 años, nos levantamos todos los días con el firme propósito de entregar
            resultados confiables y oportunos a nuestros clientes para lo cual nuestra empresa cuenta
            con un staff de profesionales y técnicos especializados en actividades de laboratorio y salud
            ocupacional. <br />
            La confianza que depositan en nosotros y nuestra experiencia es, sin duda, nuestra mejor
            carta de presentación.</p>
          </div>
        </div>

        <div className="flex flex-col h-auto items-center lg:px-24 px-8 justify-center py-12 bg-green-400">
          <h1 className="lg:text-4xl text-3xl text-center font-bold">¿Por qué escojer a Labmeta S.A.?</h1>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center">
              <i className="fas fa-map-marked-alt text-6xl border border-white p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
              <p className="py-2 text-xl font-bold">Ubicación</p>
              <p className="w-64">Zona preferente y céntrica de la ciudad de Quito</p>
            </div>
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center">
              <i className="fas fa-building text-6xl border border-white p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
              <p className="py-2 text-xl font-bold">Infraestructura</p>
              <p className="w-64">Nuestras salas para evaluaciones y tomas de muestras son específicas para las actividades y exámenes correspondientes.</p>
            </div>
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center">
              <i className="fas fa-flask text-6xl border border-white p-8 hover:border-white hover:bg-white text-white hover:text-green-400 rounded-full"></i>
              <p className="py-2 text-xl font-bold">Innovación</p>
              <p className="w-64">Nuestros equipos son totalmente automatizados y de alta precisión, con tecnología de última generación, que garantizan resultados confiables y precisos.</p>
            </div>
          </div>
        </div>

        <div class="flex bg-white h-auto">
          <div class="flex flex-col self-center items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div className="py-4">
              <h2 class="text-3xl text-gray-800 md:text-4xl font-bold">¿Quienes Somos?.</h2>
              <p class="mt-2 text-sm md:text-base text-justify">Somos una institución de salud privada, con sentido social que apoya al sector empresarial
              e institucional en la búsqueda del mejoramiento continuo de la calidad de la vida de los
              trabajadores, a través de un servicio personalizado de alta calidad, confiabilidad,
              diagnostico, calificación, capacitación, seguimiento en y asesoría, con el fin de superar las
              expectativas de nuestros clientes.</p>
            </div>
            <div className="py-4">
              <h2 class="text-3xl text-gray-800 md:text-4xl font-bold">Nuestra filosofía.</h2>
              <p class="mt-2 text-sm md:text-base text-justify">Nuestra filosofía de trabajo es la satisfacción del cliente, a través del cumplimiento de los
              tiempos de entrega, garantía en la confidencialidad de los análisis, precios competitivos y
              comunicación permanente y oportuna.</p>
            </div>
            <div className="py-4">
              <h2 class="text-3xl text-gray-800 md:text-4xl font-bold">Calidad del Servicio.</h2>
              <p class="mt-2 text-sm md:text-base text-justify">Todos son exámenes realizados por profesionales y especialistas en Salud Ocupacional con
              ALTA experiencia en riesgos profesionales, con un enfoque preventivo y ocupacional de
              acuerdo al cargo, el servicio se ajusta a las necesidades del cliente.</p>
            </div>
          </div>
          <div class="hidden lg:block lg:w-1/2">
            <div class="h-full object-cover">
              <img alt="pic" src={ logo } className="opacity-75" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:px-24 px-8 justify-center py-4 bg-yellow-400">
          <h1 className="lg:text-4xl text-3xl font-bold">Nuestros servicios</h1>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center">
              <img alt="pic" src={ logo } className="h-56 w-56" />
              <p className="py-2 text-xl font-bold">Servicio</p>
            </div>
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center">
              <img alt="pic" src={ logo } className="h-48 w-48" />
              <p className="py-2 text-xl font-bold">Servicio</p>
            </div>
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center">
              <img alt="pic" src={ logo } className="h-48 w-48" />
              <p className="py-2 text-xl font-bold">Servicio</p>
            </div>
            <div className="flex flex-col py-4 px-4 mx-2 items-center text-center">
              <img alt="pic" src={ logo } className="h-48 w-48" />
              <p className="py-2 text-xl font-bold">Servicio</p>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}

export default withRouter(Home);
