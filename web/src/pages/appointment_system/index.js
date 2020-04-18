import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Footer from "../website/components/Footer";

class Index extends Component {
  render() {
    return (
      <div>
        Sistema de Citas
        <Footer />
      </div>
    );
  }
}

export default withRouter(Index);
