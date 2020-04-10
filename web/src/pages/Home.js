import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import Header from '../components/Header';
import Carousel from '../components/Carrousel';

class Home extends Component {
  render() {
    const image1 = require("../assets/home/test1.jpg")
    return(
      <div>
        <Header />
        <Carousel />
        <div className="w-full h-screen flex items-center justify-center px-64">
          <img alt="pic" src={ image1 } className="rounded-lg mr-6" />
          <div>
            <h1 className="text-4xl font-bold text-green-400">Bienvenido a Labmeta S.A.</h1>
            <h3 className="text-xl text-green-400">Laboratorios Médicos de Tecnología Avanzada</h3>
            <p className="mt-4">A partir del año 1996 brindando servicios de laboratorio clínico y radiológico con los más
            altos estándares de calidad. <br />
            La confianza que depositan en nosotros y nuestra experiencia es, sin duda, nuestra mejor
            carta de presentación.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);
