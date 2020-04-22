import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="w-56 mt-12 h-full bg-gray-900 text-white fixed">
        <div className="py-2">
          <div className="h-full py-1">
            <button
              className="w-full block lg:flex lg:items-center text-center lg:text-left lg:shadow-none py-6 lg:py-2 lg:px-4 border-l-4 hover:bg-gray-800"
              onClick={() => this.props.history.push("/adminhome")}
            >
              <i className="fas fa-home mr-2"></i>
              <div className="text-xs">Inicio</div>
            </button>
          </div>
          <div className="group relative h-full py-1">
            <button className="w-full block xl:flex xl:items-center text-center xl:text-left xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 hover:bg-gray-800">
              <i className="fas fa-id-card-alt mr-2"></i>
              <div className="text-xs">Empleados</div>
              <i className="fas fa-angle-right ml-2"></i>
            </button>
            <div className="hidden group-hover:block absolute xl:relative w-full bg-gray-900 z-50 xl:z-auto border-gray-600">
              <button
                className="w-full block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent hover:text-blue-dark text-xs hover:bg-gray-800"
                onClick={() => this.props.history.push("/addemployee")}
              >
                <i className="fas fa-play mr-2 ml-4"></i>
                Añadir nuevo empleado
              </button>
              <button className="w-full block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent hover:text-blue-dark text-xs hover:bg-gray-800">
                <i className="fas fa-play mr-2 ml-4"></i>
                Administrar médicos
              </button>
            </div>
          </div>
          <div className="group relative h-full py-1">
            <button className="w-full block xl:flex xl:items-center text-center xl:text-left xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 hover:bg-gray-800">
              <i className="fas fa-user mr-2"></i>
              <div className="text-xs">Pacientes</div>
              <i className="fas fa-angle-right ml-2"></i>
            </button>
            <div className="hidden group-hover:block absolute xl:relative w-full bg-gray-900 z-50 xl:z-auto border-gray-600">
              <button className="w-full block text-left xl:flex xl:items-center shadow xl:shadow-none py-3 px-3 xl:px-4 border-l-4 border-transparent hover:text-blue-dark text-xs hover:bg-gray-800">
                <i className="fas fa-play mr-2 ml-4"></i>
                Administrar pacientes
              </button>
            </div>
          </div>
          <div className="group relative h-full py-1">
            <button className="w-full block xl:flex xl:items-center text-center xl:text-left xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 hover:bg-gray-800">
              <i className="fas fa-clock mr-2"></i>
              <div className="text-xs">Historial de citas</div>
            </button>
          </div>

          <h1 className="text-center text-bold">Parámetros</h1>
          <div className="group relative h-full py-1">
            <button className="w-full block xl:flex xl:items-center text-center xl:text-left xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 hover:bg-gray-800">
              <i className="fas fa-puzzle-piece mr-2"></i>
              <div className="text-xs">Géneros</div>
            </button>
          </div>
          <div className="group relative h-full py-1">
            <button className="w-full block xl:flex xl:items-center text-center xl:text-left xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 hover:bg-gray-800">
              <i className="fas fa-puzzle-piece mr-2"></i>
              <div className="text-xs">Tipo de personas</div>
            </button>
          </div>
          <div className="group relative h-full py-1">
            <button className="w-full block xl:flex xl:items-center text-center xl:text-left xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 hover:bg-gray-800">
              <i className="fas fa-puzzle-piece mr-2"></i>
              <div className="text-xs">Tipo de identificaciones</div>
            </button>
          </div>
          <div className="group relative h-full py-1">
            <button className="w-full block xl:flex xl:items-center text-center xl:text-left xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 hover:bg-gray-800">
              <i className="fas fa-puzzle-piece mr-2"></i>
              <div className="text-xs">Estados de citas</div>
            </button>
          </div>
          <div className="group relative h-full py-1">
            <button className="w-full block xl:flex xl:items-center text-center xl:text-left xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 hover:bg-gray-800">
              <i className="fas fa-puzzle-piece mr-2"></i>
              <div className="text-xs">Servicios</div>
            </button>
          </div>
          <div className="group relative h-full py-1">
            <button className="w-full block xl:flex xl:items-center text-center xl:text-left xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 hover:bg-gray-800">
              <i className="fas fa-puzzle-piece mr-2"></i>
              <div className="text-xs">Horarios de citas</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
