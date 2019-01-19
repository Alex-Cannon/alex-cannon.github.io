import React, { Component } from 'react';
import './nav.scss';

export default class Nav extends Component {
  render() {
    return(
      <nav>
      <a className="nav-left" href="#project-container">
        <h3><i>Alex Cannon</i></h3>
        <p>Portfolio</p>
      </a>    
      <a className="nav-right" href="#about-container">
        <h3>About</h3>
      </a>
    </nav>
    );
  }
}