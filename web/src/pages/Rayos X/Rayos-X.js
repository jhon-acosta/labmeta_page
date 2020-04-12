import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class RayosX extends Component {
    render() {
        const rayosx_img = require("./rayosx-img.jpg")
        return (
            <div className="font-serif">
                <Header />
                <div className="py-8 lg:px-32 md:px-32 px-8 bg-gray-300 flex flex-col">
                    <h1 className="text-center lg:text-4xl md:text-4xl text-2xl font-bold text-green-700">Rayos X</h1>
                    <p className="text-justify lg:text-2xl md:text-2xl text-md text-green-700">
                        Los rayos X son un tipo de radiación llamada ondas
                        electromagnéticas. Las imágenes de rayos X muestran
                        el interior de su cuerpo en diferentes tonos de blanco
                        y negro. Esto es debido a que diferentes tejidos absorben
                       diferentes cantidades de radiación.</p>
                    <p className="text-justify lg:px-32 py-2 lg:text-xl md:text-xl text-sm"> El calcio en los
                    huesos absorbe la mayoría de los rayos X, por lo que
                    los huesos se ven blancos. La grasa y otros tejidos
                    blandos absorben menos, y se ven de color gris. El aire
                    absorbe la menor cantidad, por lo que los pulmones
                    se ven negros.
                    </p>
                    <p className="text-justify lg:px-32 py-2 lg:text-xl md:text-xl text-sm">
                    El uso más común de los rayos X es para ver fracturas (huesos rotos),
                    pero también se utilizan para otros usos. Por ejemplo, las radiografías
                    de tórax pueden detectar neumonía. Las mamografías utilizan rayos X
                    para detectar el cáncer de mama.
                    </p>
                    <img src={ rayosx_img } alt="pic" className="py-2" />
                    <p className="text-center lg:text-4xl md:text-3xl text-2xl font-bold py-4 text-green-700">
                        Llame a LABMETA S.A, Laboratorios Médicos de Tecnología Avanzada</p>

                    <p className="text-center text-green-700 text-xl">(02) 2503238 - 2503037</p>
                    <p className="text-center text-green-700 text-xl">(+593) 0996031288</p>

                    <p className="text-center text-green-700 text-2xl font-bold py-2">COSTO DEL SERVICIO : $ 99.99</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(RayosX);
