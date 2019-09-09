/** REACT IMPORTS */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

/** PAGES IMPORT */
import Construction from './pages/construction';
import ScrollToTop from './components/ScrollToTop';
import Packages from './pages/construction/components/Package';
import About from './pages/construction/components/About';

import Admin from './pages/admin';
import AdminPackages from './pages/admin/AdminPackages'
import AdminEquipments from './pages/admin/AdminEquipments';
import AdminOrders from './pages/admin/AdminOrders';
import AdminEnquiry from './pages/admin/AdminEnquiries';

/* Global, cards, item page */

const App = () => (
    <React.Fragment>
      <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact={true} component={Construction} />
          <Route path="/construction" exact={true} component={Construction} />
          <Route path="/college-package" exact={true} component={Packages}/>
          <Route path="/about-us" exact={true} component={About}/>
          <Route path="/admin" exact={true} component={Admin}/>
          <Route path="/admin-packages" exact={true} component={AdminPackages}/>
          <Route path="/admin-equipments" exact={true} component={AdminEquipments}/>
          <Route path="/admin-orders" exact={true} component={AdminOrders}/>
          <Route path="/admin-enquiries" exact={true} component={AdminEnquiry}/>

          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
        </ScrollToTop>
      </Router>
    </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
