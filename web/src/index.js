import React from "react";
import { render } from "react-dom";
import "./styles/tailwind.css";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./styles/leaflet/leaflet.css";

// WEBSITES ROUTES
import Home from "./pages/website/Home";
import RayosX from "./pages/website/Rayos-X";
import QuienesSomos from "./pages/website/QuienesSomos";
import Contactanos from "./pages/website/Contactanos";
import Cardiologia from "./pages/website/Cardiologia";
import Ecografia from "./pages/website/Ecografia";
import Ginecologia from "./pages/website/Ginecologia";
import Hermatologia from "./pages/website/Hermatologia";

// APPOINMENT SYSTEM ROUTES
import Login from "./pages/appointment_system/login";
import Register from "./pages/appointment_system/register";
// APPOINMENT SYSTEM ROUTES - PATTIENTS
import Sidebar from "./pages/appointment_system/Sidebar/Sidebar";
// APPOINMENT SYSTEM ROUTES - ADMINISTRATION
import adminlogin from "./pages/appointment_system/administration/adminlogin";
import adminhome from "./pages/appointment_system/administration/adminhome";
import addemployee from "./pages/appointment_system/administration/addemployee";

render(
  <Router>
    <Switch>
      {/* WEBSITES ROUTES */}
      <Route exact path="/" component={Home} />
      <Route path="/whoweare" component={QuienesSomos} />
      <Route path="/contactus" component={Contactanos} />
      <Route path="/rayx" component={RayosX} />
      <Route path="/cardiology" component={Cardiologia} />
      <Route path="/echography" component={Ecografia} />
      <Route path="/gynecology" component={Ginecologia} />
      <Route path="/hermatology" component={Hermatologia} />

      {/* APPOINMENT SYSTEM ROUTES */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {/* APPOINMENT SYSTEM ROUTES - PATTIENTS */}
      <Route path="/sidebar" component={Sidebar} />
      {/* APPOINMENT SYSTEM ROUTES - ADMINISTRATION */}
      <Route exact path="/adminlogin" component={adminlogin} />
      <Route exact path="/adminhome" component={adminhome} />
      <Route path="/addemployee" component={addemployee} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
