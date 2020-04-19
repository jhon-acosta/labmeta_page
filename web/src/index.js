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
      <Route path="/citas" component={Login} />

      {/* EXTRAS PAGES */}
      {/* <Route component={ Page404 } /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
