import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

class AdminHome extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="flex ml-56 p-4">asd</div>
      </div>
    );
  }
}

export default withRouter(AdminHome);
