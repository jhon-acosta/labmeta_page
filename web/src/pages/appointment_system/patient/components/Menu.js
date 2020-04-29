import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//import axios from "axios";

//const API = "http://localhost:5000/labmeta/";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pers_data: [],
          
        };
      }

/*       componentDidMount() {
        axios
          .get(API + `persona?pers_cor_ele=${localStorage.getItem("pers_cor_ele_login")}`)
          .then((response) => {
            this.setState({ pers_data: response.data.datos });
          })
          .catch((error) => {
            console.log(error);
          });
      } */

    
    render() {
       // const { pers_data } = this.state; 
        const logo = require("../../../../assets/logo.png");
        return (
            <div className="bg-yellow-400 float-left h-screen w-1/6 border-r-2 border-green-500">
                <div className="bg-yellow-400 h-16 w-full border-b-2 border-green-500 pl-20">
                    <img src={logo} alt="logo" className="h-16" />
                </div>
                <button
                    className="bg-green-400 lg:text-xs w-full h-16 md:text-xl text-sm px-4 text-left"
                >
                    <p>
                    MENU PRINCICIPAL LABMETA S.A
                    </p>
                </button>
                <button
                    className="lg:text-xl w-full h-16 md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white text-left transition ease-in-out duration-500 "
                    onClick={() => this.props.history.push("/patienthome")}
                >
                    <p>
                        <i className="fas fa-house-user px-1"></i>Inicio
                    </p>
                </button>
                <button
                    className="lg:text-xl w-full h-16 md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white text-left transition ease-in-out duration-500 "
                    onClick={() => this.props.history.push("/patientreserve")}
                >
                    <p>
                        <i className="fas fa-clipboard-list px-1"></i>Reservar una Cita
                    </p>
                </button>
                <button
                    className="lg:text-xl w-full h-16 md:text-xl text-sm px-4 hover:bg-green-500 hover:text-white  text-left transition ease-in-out duration-500 "
                    onClick={() => this.props.history.push("/clinichistory")}
                >
                    <p>
                        <i className="fas fa-list px-1"></i>Historial Clínico
                    </p>
                </button>
            </div>
        )
    }
}
export default withRouter(Menu);