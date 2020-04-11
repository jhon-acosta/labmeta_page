import React from 'react';
import { render } from 'react-dom';
import './styles/tailwind.css';
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/alpinejs'

import Home from './pages/Home';

render(
    <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          {/* <Route  path="/.." component={ .. } /> */}
          {/* <Route component={ Page404 } /> */}
        </Switch>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
