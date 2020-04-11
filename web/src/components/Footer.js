import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import LabmetaTxt from '../LabmetaTxt.jpeg'

class Footer extends Component {
  render() {
    return (
      <div className="bg-green-600 h-64" >
        <div className="float-left pt-4">
          <div className="float-left ">
            <img src={LabmetaTxt} alt="" className="w-28 h-16 pl-24 rounded-md" />
            <p className="text-justify pl-16 pt-4">
             Somos un laboratorio donde usted encontrará la mas avanzada <br/>
             tecnología y un equipo profesional altamente calificado y <br/>
             y acreditado, comprometido con la salud de los trabajadores. <br/> 
             Contamos con equipos médicos de ultima generación <br/> 
             automatizados, modernos,certificados y funcionales <br/>
             manejados por profesionales. 
            </p>
          </div>
          <div className="float-right pl-16">
            <h1 className="text-xl font-medium">Nuestros Servicios</h1>
            <ul className="">
              <li className="pt-4"><a href="/" className="hover:text-yellow-600">Cardiología</a></li>
              <li className="pt-2"><a href="/" className="hover:text-yellow-600">RayosX</a></li>
              <li className="pt-2"><a href="/" className="hover:text-yellow-600">Ginecología</a></li>
              <li className="pt-2"><a href="/" className="hover:text-yellow-600">Ecografía</a></li>
              <li className="pt-2"><a href="/" className="hover:text-yellow-600">Hermatología</a></li>
            </ul>
          </div>
        </div>

        <div className="float-right pt-4">
          <div className="float-left pr-32">
            <h1 className="text-xl font-medium">Horarios de Atención</h1>
            <p className="pt-2">
              Lun–Vie: 07:00 am–16:00pm <br /> Sab: 07:00am–16:00pm <br />
            </p>
            <h1 className="text-xl font-medium pt-4">Datos de contacto</h1>
            <p className="pt-4">
              Telf :(02) 2503238 - 2503037 <br/>
              Cel : 0996031288 <br/>
              e-mail : rlabmeta@gmail.com
            </p>
          </div>
          <div className="float-right pr-24">
          <h1 className="text-xl font-medium ">Ubicación</h1>
            <p className="pt-2">
              Av.Hungria N31-91 y Vancouver<br/>
              Diagonal a la gasolinera <br/>Petrocomercial <br/>
              Quito-Ecuador
            </p>
            <h1 className="pt-16">&copy; 2020 LABMETA S.A.</h1>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(Footer);
