import React from "react";
import { render } from "react-dom";
import "./styles/tailwind.css";
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./styles/leaflet/leaflet.css";

import Home from "./pages/Home";
import RayosX from "./pages/Rayos X/Rayos-X";
import QuienesSomos from "./pages/Quienes somos/QuienesSomos";
import Contactanos from "./pages/Contactanos/Contactanos";
import Cardiologia from "./pages/Cardiologia/Cardiologia";
import Ecografia from "./pages/Ecografia/Ecografia";
import Ginecologia from "./pages/Ginecologia/Ginecologia";
import Hermatologia from "./pages/Hermatologia/Hermatologia";

render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/whoweare" component={QuienesSomos} />
      <Route path="/contactus" component={Contactanos} />
      <Route path="/rayx" component={RayosX} />
      <Route path="/cardiology" component={Cardiologia} />
      <Route path="/echography" component={Ecografia} />
      <Route path="/gynecology" component={Ginecologia} />
      <Route path="/hermatology" component={Hermatologia} />
      {/* <Route component={ Page404 } /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
