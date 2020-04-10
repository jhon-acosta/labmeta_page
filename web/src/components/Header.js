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
      </div>
    )
  }
}

export default Header;