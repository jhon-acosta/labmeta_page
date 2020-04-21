import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

class AdminHome extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="fixed ml-56 p-8">
          <h1>HOME</h1>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default withRouter(AdminHome);
