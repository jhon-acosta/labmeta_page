import React,{Component}  from 'react';
import { withRouter } from "react-router-dom";

import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import Mapa from './Mapa'


class Contactanos extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div>                    
                {/* {Mapa} */}
                 </div>
                <Footer/>
                
            </div>
        )
    }
}
export default withRouter(Contactanos);