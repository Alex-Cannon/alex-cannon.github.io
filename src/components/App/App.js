import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer.js';
import './base.scss';

const ROUTES = [{
  path: '/',
  component: require('../../pages/Home/Home.js').default
}];

class App extends Component {

  getRoutes() {
    return ROUTES.map(({path, component: C}) => {
      const render = (props) => {
        return <>
          <Nav/>
          <C {...props}/>
          <Footer/>
        </>;
      };

      return <Route key={path} path={path} render={render} exact/>;
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>

          {this.getRoutes()}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
