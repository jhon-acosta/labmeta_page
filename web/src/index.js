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
//import Patientupdatepassword from "./pages/appointment_system/patient/patientupdatepassword";
import Reserve from "./pages/appointment_system/patient/patientreserve";
import Clinichistory from "./pages/appointment_system/patient/patientclinichistory";
// APPOINMENT SYSTEM ROUTES - ADMINISTRATION
import Adminlogin from "./pages/appointment_system/administration/login";
import Adminhome from "./pages/appointment_system/administration/home";
import Addemployee from "./pages/appointment_system/administration/pages/employees/addemployee";
import Employees from "./pages/appointment_system/administration/pages/employees/employees";
import Updateemployee from "./pages/appointment_system/administration/pages/employees/updateemployee";
import Addpatient from "./pages/appointment_system/administration/pages/patients/addpatient";
import Patients from "./pages/appointment_system/administration/pages/patients/patients";
import Updatepatient from "./pages/appointment_system/administration/pages/patients/updatepatient";
import appointmentHistory from "./pages/appointment_system/administration/pages/appointmentHistory";
import Addgenre from "./pages/appointment_system/administration/parameters/genres/addgenre";
import Genres from "./pages/appointment_system/administration/parameters/genres/genres";
import Updategenre from "./pages/appointment_system/administration/parameters/genres/updategenre";
import Addpeopletype from "./pages/appointment_system/administration/parameters/peopletypes/addpeopletype";
import Peopletypes from "./pages/appointment_system/administration/parameters/peopletypes/peopletypes";
import Updatepeopletype from "./pages/appointment_system/administration/parameters/peopletypes/updatepeopletype";
import Addidentificationtype from "./pages/appointment_system/administration/parameters/identificationtypes/addidentificationtype";
import Identificationtypes from "./pages/appointment_system/administration/parameters/identificationtypes/identificationtypes";
import Updateidentificationtype from "./pages/appointment_system/administration/parameters/identificationtypes/updateidentificationtype";
import Addappointmentstate from "./pages/appointment_system/administration/parameters/appointmentstates/addappointmentstate";
import Appointmentstates from "./pages/appointment_system/administration/parameters/appointmentstates/appointmentstates";
import Updateappointmentstate from "./pages/appointment_system/administration/parameters/appointmentstates/updateappointmentstate";
import Addservice from "./pages/appointment_system/administration/parameters/services/addservice";
import Services from "./pages/appointment_system/administration/parameters/services/services";
import Updateservice from "./pages/appointment_system/administration/parameters/services/updateservice";
import Addappointmentschedule from "./pages/appointment_system/administration/parameters/appointmentschedules/addappointmentschedule";
import Appointmentschedules from "./pages/appointment_system/administration/parameters/appointmentschedules/appointmentschedules";
import Updateappointmentschedule from "./pages/appointment_system/administration/parameters/appointmentschedules/updateappointmentschedule";

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
      {/*  <Route
        exact
        path="/patientupdatepassword"
        component={Patientupdatepassword}
      /> */}
      <Route exact path="/patientreserve" component={Reserve} />
      <Route exact path="/clinichistory" component={Clinichistory} />
      {/* APPOINMENT SYSTEM ROUTES - ADMINISTRATION */}
      <Route exact path="/admin/login" component={Adminlogin} />
      <Route exact path="/admin/home" component={Adminhome} />
      <Route path="/admin/addemployee" component={Addemployee} />
      <Route path="/admin/employees" component={Employees} />
      <Route path="/admin/updateemployee" component={Updateemployee} />
      <Route path="/admin/addpatient" component={Addpatient} />
      <Route path="/admin/patients" component={Patients} />
      <Route path="/admin/updatepatient" component={Updatepatient} />
      <Route path="/admin/appointmenthistory" component={appointmentHistory} />
      <Route path="/admin/parameters/addgenre" component={Addgenre} />
      <Route path="/admin/parameters/genres" component={Genres} />
      <Route path="/admin/parameters/updategenre" component={Updategenre} />
      <Route path="/admin/parameters/addpeopletype" component={Addpeopletype} />
      <Route path="/admin/parameters/peopletypes" component={Peopletypes} />
      <Route
        path="/admin/parameters/updatepeopletype"
        component={Updatepeopletype}
      />
      <Route
        path="/admin/parameters/addidentificationtype"
        component={Addidentificationtype}
      />
      <Route
        path="/admin/parameters/identificationtypes"
        component={Identificationtypes}
      />
      <Route
        path="/admin/parameters/updateidentificationtype"
        component={Updateidentificationtype}
      />
      <Route
        path="/admin/parameters/addappointmentstate"
        component={Addappointmentstate}
      />
      <Route
        path="/admin/parameters/appointmentstates"
        component={Appointmentstates}
      />
      <Route
        path="/admin/parameters/updateappointmentstate"
        component={Updateappointmentstate}
      />
      <Route path="/admin/parameters/addservice" component={Addservice} />
      <Route path="/admin/parameters/services" component={Services} />
      <Route path="/admin/parameters/updateservice" component={Updateservice} />
      <Route
        path="/admin/parameters/addappointmentschedule"
        component={Addappointmentschedule}
      />
      <Route
        path="/admin/parameters/appointmentschedules"
        component={Appointmentschedules}
      />
      <Route
        path="/admin/parameters/updateappointmentschedule"
        component={Updateappointmentschedule}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
