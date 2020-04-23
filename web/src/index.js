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

// APPOINMENT SYSTEM ROUTES - PATTIENTS
import Patientlogin from "./pages/appointment_system/patient/patientlogin";
import Patientregister from "./pages/appointment_system/patient/patientregister";
import Patienthome from "./pages/appointment_system/patient/patienthome";
import Patientupdate from "./pages/appointment_system/patient/patientupdate";
import Patientupdatepassword from "./pages/appointment_system/patient/patientupdatepassword";
// APPOINMENT SYSTEM ROUTES - ADMINISTRATION
import Adminlogin from "./pages/appointment_system/administration/adminlogin";
import Adminhome from "./pages/appointment_system/administration/adminhome";
import Addemployee from "./pages/appointment_system/administration/addemployee";
import Employees from "./pages/appointment_system/administration/employees";
import Updateemployee from "./pages/appointment_system/administration/updateemployee";
import Patients from "./pages/appointment_system/administration/patients";
import Genres from "./pages/appointment_system/administration/genres";
import Peopletype from "./pages/appointment_system/administration/peopletype";

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
      {/* APPOINMENT SYSTEM ROUTES - PATTIENTS */}
      <Route exact path="/patientlogin" component={Patientlogin} />
      <Route exact path="/patientregister" component={Patientregister} />
      <Route exact path="/patienthome" component={Patienthome} />
      <Route exact path="/patientupdate" component={Patientupdate} />
      <Route exact path="/patientupdatepassword" component={Patientupdatepassword} />
      {/* APPOINMENT SYSTEM ROUTES - ADMINISTRATION */}
      <Route exact path="/adminlogin" component={Adminlogin} />
      <Route exact path="/adminhome" component={Adminhome} />
      <Route path="/addemployee" component={Addemployee} />
      <Route path="/employees" component={Employees} />
      <Route path="/updateemployee" component={Updateemployee} />
      <Route path="/patients" component={Patients} />
      <Route path="/genres" component={Genres} />
      <Route path="/peopletype" component={Peopletype} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
