import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Hermatologia extends Component {
  render() {
    const hermatologia_img = require("./hermatologia_img.jpg");
    return (
      <div className="font-hairline">
        <Header />
        <div className="py-8 lg:px-32 md:px-32 px-8 bg-gray-300 flex flex-col">
          <h1 className="text-center lg:text-4xl md:text-4xl text-2xl font-bold text-green-700">
            Hermatología
          </h1>
          <p className="text-justify lg:text-2xl md:text-2xl text-md text-green-700">
            Es la especialidad médica que se ocupa del estudio, diagnóstico,
            tratamiento y prevención de las enfermedades de la sangre y los
            órganos que participan en su producción, como son la médula ósea, el
            bazo o los ganglios, entre otros.
          </p>
          <p className="text-justify lg:px-32 py-2 lg:text-xl md:text-xl text-sm">
            Asimismo , se ocupa de los componentes de la sangre (glóbulos rojos,
            eritrocitos, plaquetas, leucocitos, hemoglobina, plasma, etc.) y de
            sus características (mecanismo de coagulación, etc.)
          </p>
          <p className="text-justify lg:px-32 py-2 lg:text-xl md:text-xl text-sm">
            Gestión y diagnóstico biológico en laboratorio de determinaciones
            hematológicas básicas o especiales (análisis de sangre).
          </p>
          <img src={hermatologia_img} alt="pic" className="py-2" />
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

export default withRouter(Hermatologia);
