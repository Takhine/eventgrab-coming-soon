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
import CollegePackage from './pages/construction/components/CollegePackage';
import About from './pages/construction/components/About';

/* Global, cards, item page */

const App = () => (
    <React.Fragment>
      <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact={true} component={Construction} />
          <Route path="/construction" exact={true} component={Construction} />
          <Route path="/college-package" exact={true} component={CollegePackage}/>
          <Route path="/about-us" exact={true} component={About}/>          
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
        </ScrollToTop>
      </Router>
    </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
