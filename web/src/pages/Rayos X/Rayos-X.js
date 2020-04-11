import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RayosImg from './Rayos-X.jpg'

class RayosX extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="py-8 lg:px-32 md:px-32 px-8 bg-gray-300">
                    <h1 className="text-center lg:text-4xl md:text-4xl text-2xl font-bold text-green-700">Rayos X</h1>
                    <p className="text-center lg:text-2xl md:text-2xl text-xl text-green-700">
                        Los rayos X son un tipo de radiación llamada ondas
                        electromagnéticas. Las imágenes de rayos X muestran
                        el interior de su cuerpo en diferentes tonos de blanco
                        y negro. Esto es debido a que diferentes tejidos absorben
                       diferentes cantidades de radiación.</p>
                    <p className="text-center pl-64 pr-64 pt-6 text-xl" > El calcio en los
                    huesos absorbe la mayoría de los rayos X, por lo que
                    los huesos se ven blancos. La grasa y otros tejidos
                    blandos absorben menos, y se ven de color gris. El aire
                    absorbe la menor cantidad, por lo que los pulmones
                    se ven negros.
                       <br />
                       El uso más común de los rayos X es para ver fracturas (huesos rotos),
                       pero también se utilizan para otros usos. <br />Por ejemplo, las radiografías
                       de tórax pueden detectar neumonía. Las mamografías utilizan rayos X
                       para detectar el cáncer de mama.
                    </p>
                    <img src={RayosImg} alt="" className="pt-8 m-auto w-9/12" />
                    <p className="text-center pt-2 text-green-700 text-2xl font-bold">
                        Llame a LABMETA S.A, su clínica de salud vital:</p>

                    <p className="text-center text-green-700 text-xl font-medium">
                        (02) 2503238 - 2503037 <br />
                        (+593) 0996031288</p>

                    <p className="text-center text-green-700 text-3xl font-bold">
                        COSTO DEL SERVICIO : $ 99.99</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(RayosX);
