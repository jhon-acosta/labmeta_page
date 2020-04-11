import React, { Component } from 'react';

import Labmeta from '../Labmeta.jpeg'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="w-full h-8 bg-green-400">
        </div>

        <div className="w-full h-24 bg-yellow-400">
          <div className="float-left pl-24">
            <img src={Labmeta} alt="/" className="w-28 h-24 inset-x-10" />
          </div>

          <div className="float-right">
            <div className="float-left pr-32">
              <h1 className="font-extrabold text-3xl">Llama hoy</h1>
              <p>(+593) 987654321 <br /> (02) 321-456</p>
            </div>

            <div className="float-right pr-48">
              <h1 className="font-extrabold text-3xl">Horario de Apertura</h1>
              <p>Lun–Vie: 07:00 am–16:00pm <br /> Sab: 07:00am–16:00pm</p>
            </div>
          </div>
        </div>
        <hr className="border-green-400" />
        <div className="h-10 pl-24 bg-yellow-500">
          <ul className="flex pr-4">
            <li className="pr-20 pt-1"><a href="/" className="text-xl font-medium">Inicio <span className=""></span></a></li>

            <li className="pr-20 pt-1">
              <a href="/" className="text-xl font-medium">Servicios <span className=""></span></a>
              
                <div className="sub-menu-items bg-gray-500 hover:block">
                  <p className= "hover:block"> Especialidades</p>
                  <ul className = "p-4 hidden">
                    <li><a href="/" className= "py  -4">Cardiología</a></li>
                    <li><a href="/" className= "py-4">RayosX</a></li>
                    <li><a href="/" className= "py-4">Ginecología</a></li>
                    <li><a href="/" className= "py-4">Ecografía</a></li>
                    <li><a href="/" className= "py-4">Hermatología</a></li>
                  </ul>
                </div>

            </li>

            <li className="pr-20 pt-1"><a href="/" className="text-xl font-medium">Promociones <span className="list-inline-from-md"></span></a></li>
            <li className="pr-20 pt-1"><a href="/" className="text-xl font-medium">¿Quíenes Somos? <span className="list-inline-from-md"></span></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;