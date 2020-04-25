import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

class AdminHome extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
        <div className="flex flex-col ml-48 p-4"></div>
      </div>
    );
  }
}

export default withRouter(AdminHome);
