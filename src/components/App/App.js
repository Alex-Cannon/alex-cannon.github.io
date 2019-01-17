import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './base.scss';

const ROUTES = [{
  path: '/',
  component: require('../../pages/Home/Home.js').default
}];

class App extends Component {

  getRoutes() {
    return ROUTES.map(({path, component: C}) => {
      const render = (props) => {
        return <C {...props}/>;
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
